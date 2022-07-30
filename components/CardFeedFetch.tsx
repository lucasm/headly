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
        console.log('feed', props.name, 'called:', responseJson)
        setData(responseJson)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        setData([
          {
            title: 'Error - frontend fetch',
            link: 'mailto:feedback@headly.app?subject=Feedback&body=Error%20in%20' + props.name,
          },
        ])
      })
  }, [])

  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <a href={item.link} target="_blank" rel="external noopener">
            {item.title}
          </a>
        </li>
      ))}
      {loading && <Loader />}
    </ul>
  )
}
