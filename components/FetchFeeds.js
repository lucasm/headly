// components/FetchFeeds.js

import React from "react";
import styles from '../styles/CardFeed.module.css';

// generate ID 
function generateId(string) {
  let lovercased = string.toLowerCase();
  let replaced = lovercased.replace(/\s/g, '-')
  
  return replaced;
}

let apiData = [];

export default function FetchFeeds(props) {
   
  // state: store data
  const [feedData, setFeedData] = React.useState([]);

  // effect: run only one time (didMount)
  React.useEffect(() => {

   console.log(props.category);

   fetch("http://localhost:3000/api/"+props.country+"?category="+props.category)
   .then((response) => {
      return response.json();
   })
   .then((responseJson) => {
      apiData = responseJson;
      console.log('api', props.category, 'called:', responseJson);
      setFeedData(responseJson);
   });

   //  fetchDataFromApi();

  }, []);

   // const fetchDataFromApi = async () => {
   //    const response = await fetch("http://localhost:3000/api/"+props.country+"?category="+props.category);
   //    const data = await response.json();
   //    apiData = data;
   //    setFeedData(data);
   // };
 
  return (
      <div className={styles.feed}>
        { feedData.map(item =>(
            <ul id={ generateId(item.id) } style={{backgroundImage:'url(/images/logos/'+generateId(item.id)+'.svg)'}} key={ item.id }>
              { item.feedItems.map(i =>(
                <li key={ i.title }><a href={ i.link } target="_blank" rel="external noopener">{ i.title }</a></li>
            )) }</ul>
        )) }
      </div>
  );
}