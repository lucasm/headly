// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Parser from 'rss-parser';
let parser = new Parser();

const getFeeds = (callback) => {

  parser.parseURL('https://bleacherreport.com/articles/feed', (err, feed) => {

      var a = [];

      if (err) {
        console.log(err);
        return callback(['erro']);
      }

      console.log(feed);

      feed.items.forEach(item => {
        a.push({
          "title": item.title,
          "link": item.link,
          "content": item.content
        });
      });

      var x = [{
        "name": feed.title,
        "feeds": a
      }];
      
      return callback(x);
  });


}

export default function handler(req, res) {

    getFeeds(function(data) {
      res.status(200).send(data);
    });


}