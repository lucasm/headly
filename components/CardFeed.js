// components/CardFeed.js

import styles from '../styles/CardFeed.module.css';
import CardFeedFetch from './CardFeedFetch';

export default function Card(props) {

    // load feed file to preload cards
    const feed = require('../locales/feeds/'+props.country+'.json');

    /*
        normalize name as ID (to match with path of SVG filenames)
    */
    function generateId(string) {
        let id = string
        .toLowerCase()
        .replace("í", 'i')
        .replace("ã", 'a')
        .replace("á", 'a')
        .replace("ê", 'e')
        .replace("ú", 'u')
        .replace("ó", 'o')
        .replace(/\s/g, '-');
        
        return id;
    }

    console.log('#', props.category, 'cards generated');

  return (

    <div className={styles.feed}>
        { feed[props.category].map(item =>(
            <div key={ props.country+item.name } id={ generateId(item.name) }>

                <figure style={{backgroundImage:'url(/images/logos/'+generateId(item.name)+'.svg)'}}>
                    <h3>{item.name}</h3>
                </figure>

                <CardFeedFetch country={props.country} category={props.category} name={item.name} />

            </div>
        )) }
    </div>
)}