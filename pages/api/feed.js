// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Parser from 'rss-parser';
let parser = new Parser();

var feedCountry, feedCategory, feedName = '';
var feedFilter = {};

function setValues(country, category) {

	feedCountry = require('../../locales/feeds/'+country+'.json');
	feedFilter = eval(feedCountry.filter["keywords"]);
	feedCategory = category;
}

// fetch feeds
const getFeedByCategory = async(callback) => {

	var ids = [];
	var theFeed = [];
	var filteredFeed = [];

	try {
		let feeds = await Promise.all(feedCountry[feedCategory].map(i => {

			ids.push(i.name);

			return parser.parseURL(i.feed)
		})) 
		await Promise.all(feeds.map(i => {

			theFeed.push({
				"title": i.title,
				"items": i.items.slice(0, 3)
			});
		}))

		// filtering responses
		for (var i in ids) {

			filteredFeed.push({
				'id': ids[i],
				'feedName': theFeed[i].title,
				'feedItems': []
			})

			for (var j in theFeed[i].items) {

				filteredFeed[i].feedItems.push({
					'title': theFeed[i].items[j].title,
					'link': theFeed[i].items[j].link + "?utm_source=headly_app"
				})
			}
		}
		
		console.log(filteredFeed);
		return callback(filteredFeed);

	} catch(err) {
		console.log('Error getting Feed by Category', err);
		return callback(err);
	}
}
const getFeedByName = (callback) => {

	var feedUrl = '';

	// iterate to find feed
	for ( var i in feedCountry[feedCategory] ) {
		if (feedName == feedCountry[feedCategory][i].name) {
			// store feed URL
			feedUrl = feedCountry[feedCategory][i].feed;
		}
	}
	
	// parser feed URL
	parser.parseURL(feedUrl, (err, feed) => {

		if (err) {
			console.log(err);
			return callback([{
				"title": "Error fetching feed, click to send feeback",
				"link": "mailto:feedback@headly.app"
			  }]);
		}

		var a = [];

		for ( var i in feed.items.slice(0, 3) ) {
			a.push({
				"title": feed.items[i].title.replace(feedFilter, ""),
				"link": feed.items[i].link + "?utm_source=headly_app"
			});
		}

		console.log(a);
		return callback(a);
	});
}

export default function handler(req, res) {

    // parameters
    const {
		query: {country},
		query: {category},
		query: {name}
	  } = req

	// endpoints
	if ( country && category && name ) { // single feed by Name

		setValues(country, category);
		feedName = name;

		getFeedByName(function(data) {
			res.status(200).send(data);
		});

	} else if ( country && category ) { // all feeds by Category

		setValues(country, category);

		getFeedByCategory(function(data) {
			res.status(200).send(data);
		});

	} else {
		// error
		res.status(405).end(`Error: missing or not allowed parameters | country: '${country}' | category: '${category}' | name: '${name}'`);
	}

}