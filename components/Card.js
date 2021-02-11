// components/Card.js

import styles from '../styles/CardFeed.module.css';
import CardGetFeeds from '../components/CardGetFeeds';

// turn name into ID 
function generateId(string) {
    let lovercase = string.toLowerCase();
    let intFlag = lovercase.replace(/_/g, '');
    let replaceSpaces = intFlag.replace(/\s/g, '-');
    
    return replaceSpaces;
}

export default function Card(props) {

    // feed file
    let feedCountry = require('../data/'+props.country+'.json');

    console.log('#', props.category, 'cards generated');

  return (

    <div className={styles.feed}>
        { feedCountry[props.category].map(item =>(
            <ul id={ generateId(item.name) } style={{backgroundImage:'url(/images/logos/'+generateId(item.name)+'.svg)'}} key={ item.name }>
                <h3>{item.name}</h3>

                <CardGetFeeds country={props.country} category={props.category} id={item.name}/>
            </ul>
        )) }
    </div>
)}