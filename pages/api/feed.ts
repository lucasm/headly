// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Parser from 'rss-parser'
let parser = new Parser()

// set vars
var feedCountry,
  feedCategory,
  feedName = ''
var feedFilter

// set values from feeds files
function setValues(country, category) {
  feedCountry = require('../../locales/feeds/' + country + '.json')
  feedFilter = eval(feedCountry.filter['keywords'])
  feedCategory = category
}

// fetch all feeds by Category
async function getFeedByCategory(callback) {
  var ids = []
  var theFeed = []
  var filteredFeed = []

  try {
    let feeds = await Promise.all(
      feedCountry[feedCategory].map((i) => {
        ids.push(i.name)

        return parser.parseURL(i.feed)
      })
    )
    await Promise.all(
      feeds.map((i) => {
        theFeed.push({
          title: i.title,
          items: i.items.slice(0, 3),
        })
      })
    )

    // filtering responses
    for (var i in ids) {
      filteredFeed.push({
        id: ids[i],
        feedName: theFeed[i].title,
        feedItems: [],
      })

      for (var j in theFeed[i].items) {
        filteredFeed[i].feedItems.push({
          title: theFeed[i].items[j].title,
          link: theFeed[i].items[j].link + '?utm_source=headly_app',
        })
      }
    }

    console.log(filteredFeed)
    return callback(filteredFeed)
  } catch (err) {
    console.log('Error getting Feed by Category', err)
    return callback(err)
  }
}
// fetch one feed by Name
const getFeedByName = (callback) => {
  var feedUrl = ''

  // iterate to find feed
  for (var i in feedCountry[feedCategory]) {
    if (feedName == feedCountry[feedCategory][i].name) {
      // set feed URL
      feedUrl = feedCountry[feedCategory][i].feed
    }
  }

  // parser feed URL
  parser.parseURL(feedUrl, (err, feed) => {
    if (err) {
      console.log(err)
      return callback([
        {
          title: 'Error - backend fetch',
          link: 'mailto:feedback@headly.app?subject=Feedback&body=Error%20in%20' + feedUrl,
        },
      ])
    } else {
      var a = []

      for (var i in feed.items.slice(0, 3)) {
        a.push({
          title: feed.items[i].title.replace(feedFilter, ''),
          link: feed.items[i].link + '?utm_source=headly_app',
        })
      }
      console.log(a)
      return callback(a)
    }
  })
}

// serve api endpoints
export default function handler(req, res) {
  // set query parameters
  const {
    query: { country },
    query: { category },
    query: { name },
  } = req

  // 1 - one feed by name
  if (country && category && name) {
    setValues(country, category)
    feedName = name
    getFeedByName(function (data) {
      res.status(200).send(data)
    })

    // 2 - all feeds by Category
  } else if (country && category) {
    setValues(country, category)
    getFeedByCategory(function (data) {
      res.status(200).send(data)
    })
  } else {
    // error
    res.status(405).end(`Error: missing or not allowed parameters | country: '${country}' | category: '${category}' | name: '${name}'`)
  }
}
