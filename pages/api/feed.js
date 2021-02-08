// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Parser from 'rss-parser';
let parser = new Parser();

// parameters
var feedCountry, feedCategory, feedId;

// fetching feeds
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
					'link': theFeed[i].items[j].link + "?ref=headlyne"
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
const getFeedById = (callback) => {

	var feedUrl = '';

	// loop to find ID
	for ( var i in feedCountry[feedCategory] ) {
		if (feedId == feedCountry[feedCategory][i].name) {
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
				"link": "mailto:feedback@lucasm.dev"
			  }]);
		}

		var a=[];

		const removes=/ - Reuters| - Bloomberg| - CNET| - Folha de S.Paulo| - UOL Notícias| - Política Estadão| - Omelete| - AdoroCinema/;

		for ( var i in feed.items.slice(0, 3) ) {
			a.push({
				"title": feed.items[i].title.replace(removes, ""),
				"link": feed.items[i].link + "?ref=headlyne"
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
		query: {id}
	  } = req
	  
	//
	if ( country && category && id ) {

		// get one feed by ID
		feedCountry = require('../../data/'+country+'.json');
		feedCategory = category;
		feedId = id;

		getFeedById(function(data) {
			res.send(data);
		});

	} else if ( country && category ) {

		// get all feeds by Category
		feedCountry = require('../../data/'+country+'.json');
		feedCategory = category;

		getFeedByCategory(function(data) {
			res.status(200).send(data);
		});

	} else {
		// error
		res.status(405).end(`Error: missing or not allowed parameters 1 '${country}' 2 '${category}' 3 '${id}'`);
	}

}