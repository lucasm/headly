import styles from '../styles/CardFeed.module.css'
import CardFeedFetch from './CardFeedFetch'
import { useEffect, useState } from 'react'

type Props = {
  country: string
  category: string
}

export default function Card(props: Props) {
  // load file with rss feeds before generate cards
  const feed = require('../locales/feeds/' + props.country + '.json')

  // normalize name as ID (to match with path of SVG filenames)
  function normalizeId(string) {
    let id = string
      .toLowerCase()
      .replace('í', 'i')
      .replace('ã', 'a')
      .replace('á', 'a')
      .replace('ê', 'e')
      .replace('ú', 'u')
      .replace('ó', 'o')
      .replace(/\s/g, '-')

    return id
  }

  // random
  const [feeds, setFeeds] = useState([])

  console.log('LAYOUT CARD MOUNTED', props.category)

  // .sort(() => Math.random() - 0.5))

  return (
    <div className={styles.feed}>
      {feed[props.category].map((item) => (
        <div key={props.country + item.name} id={normalizeId(item.name)}>
          <figure
            style={{
              backgroundImage: 'url(/images/logos/' + normalizeId(item.name) + '.svg)',
            }}>
            <h3>{item.name}</h3>
          </figure>

          <CardFeedFetch country={props.country} category={props.category} name={item.name} />
        </div>
      ))}
    </div>
  )
}
