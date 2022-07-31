import Parser from 'rss-parser'
const parser = new Parser()

// set global params
var feedCountry: any
var feedCategory: string
var feedName: string
var feedKeywordsFilter: string

interface IFeedFile {
  name: string
  url: string
}

// set values by request
function setValues(country: string, category: string, name?: string) {
  // get values from feed files
  feedCountry = require('../../locales/feeds/' + country + '.json')
  feedKeywordsFilter = eval(feedCountry.filter['keywords'])
  feedCategory = category

  if (name) {
    feedName = name
  }
}

// case 1: get feeds by categories
async function getByCategory(callback): Promise<any> {
  // get all feeds by category
  var ids = []
  var theFeed = []

  try {
    let feeds = await Promise.all(
      feedCountry[feedCategory].map((item: IFeedFile) => {
        ids.push(item.name)
        return parser.parseURL(item.url)
      })
    )
    await Promise.all(
      feeds.map((item) => {
        theFeed.push({
          title: item.title,
          items: item.items.slice(0, 3),
        })
      })
    )

    // filtering responses
    var filteredFeed = []

    for (var i in ids) {
      filteredFeed.push({
        id: ids[i],
        feed_name: theFeed[i].title,
        feed_items: [],
      })

      for (var j in theFeed[i].items) {
        filteredFeed[i].feed_items.push({
          title: theFeed[i].items[j].title,
          link: theFeed[i].items[j].link + '?utm_source=headly_app',
        })
      }
    }

    console.log(filteredFeed)
    return callback(filteredFeed)
  } catch (error) {
    console.log('ERROR GETTING FEEDS BY CATEGORY', error)
    return callback({ 'ERROR GETTING FEEDS BY CATEGORY': error })
  }
}

// case 2: get feed by name
async function getByName(callback): Promise<void> {
  // set URL
  let feedUrl = ''

  feedCountry[feedCategory].forEach((item) => {
    if (feedName === item.name) {
      feedUrl = item.url
    }
  })

  // parse URL
  await parser.parseURL(feedUrl, (error, feed) => {
    if (error) {
      console.log(error)
      return callback([
        {
          title: 'Ooopss!',
          link: 'mailto:feedback@headly.app?subject=Headly%20Feedback&body=Error%20in%20' + feedName,
        },
      ])
    }

    var a = []

    feed.items.slice(0, 3).forEach((item) => {
      a.push({
        title: item.title.replace(feedKeywordsFilter, ''),
        link: item.link + '?utm_source=headly_app',
      })
    })

    console.log(a)
    return callback(a)
  })
}

// serve endpoint
export default function endpointFeed(request: any, response: any) {
  // set query parameters
  const {
    query: { country },
    query: { category },
    query: { name },
  } = request

  if (country && category && name) {
    setValues(country, category, name)
    getByName(function (data) {
      response.status(200).send(data)
    })
  } else if (country && category) {
    setValues(country, category)
    getByCategory(function (data) {
      response.status(200).send(data)
    })
  } else {
    // error
    response.status(405).end(`Error: missing parameters | country: '${country}' | category: '${category}' | name: '${name}'`)
  }
}
