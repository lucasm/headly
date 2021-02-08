// components/CardGetFeeds.js

import React from "react";

// fetch
var requested = 'no';
var dataFeed = [];
var apiData = [];

async function fetchFeeds(category) {

    // if don't stored yet, call fetch
    if ( requested != category ) {

        console.log('*** CALLING API ***', category);
        requested = category;

        fetch("http://localhost:3000/api/us?category=" + category).then(function(response) {
            response.json().then(function(data){

                // store feed data in array by category
                dataFeed.push({
                    "category": category,
                    "data": data
                });
                console.log(category, 'feeds:', data);
            });
        });
    } else {
      console.log('SKIPPED');
    }

}

export default function CardGetFeeds(props) {

  const [feedData, setFeedData] = React.useState([]);

  React.useEffect(() => {

   fetch("http://localhost:3000/api/feed?country="+props.country+"&category="+props.category+"&id="+props.id)
   .then((response) => {
      return response.json();
   })
   .then((responseJson) => {
      apiData = responseJson;
      
      console.log('api', props.id, 'called:', responseJson);
      setFeedData(responseJson);
   })
   .catch((error) => {

    console.log(error);

    var fake = [{
          "title": "Error",
          "link": "#"
        }];
        
    setFeedData(fake);
    });

  }, []);

  return (

    <div>
        {feedData.map(i =>(
            <li key={ i.title }><a href={ i.link } target="_blank" rel="external noopener">{ i.title }</a></li>
        ))}
    </div>

)}