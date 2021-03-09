// components/CardFeedFetch.js

import React from "react";

export default function CardFeedFetch(props) {

  const [feedData, setFeedData] = React.useState([]);

  React.useEffect(() => {

   fetch("/api/feed?country="+props.country+"&category="+props.category+"&name="+props.name)
   .then((response) => {
      return response.json();
   })
   .then((responseJson) => {

      console.log('feed', props.name, 'called:', responseJson);
      setFeedData(responseJson);
   })
   .catch((error) => {

    console.log(error);

    setFeedData([{
        "title": "Error",
        "link": "#"
      }]);
    });

  }, []);

  return (

    <ul>
        {feedData.map(item =>(
            <li key={ item.title }><a href={ item.link } target="_blank" rel="external noopener">{ item.title }</a></li>
        ))}
    </ul>

)}