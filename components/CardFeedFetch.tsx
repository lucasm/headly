import { useEffect, useState } from 'react'
import Loader from './Loader'

type Props = {
  country: string
  category: string
  name: string
}

export default function CardFeedFetch(props: Props) {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/feed?country=' + props.country + '&category=' + props.category + '&name=' + props.name)
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log('GET', props.name, responseJson)
        setData(responseJson)
        setLoading(false)
      })
      .catch((error) => {
        console.log('GET ERROR', error)
        setLoading(false)
        setData([
          {
            title: 'Error - frontend fetch',
            link: 'mailto:feedback@headly.app?subject=Feedback&body=Error%20in%20' + props.name,
          },
        ])
      })
  }, [props.category, props.country, props.name])

  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <a href={item.link} target="_blank" rel="external noopener noreferrer">
            {item.title}
          </a>
        </li>
      ))}
      {loading && <Loader />}
    </ul>
  )
}
