import styles from './index.module.scss'
import CardActivity from '../cardactivity'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const formatContentText = (content) => {
  const textArr = content.split('.')
  return textArr.splice(1, textArr.length - 2).join('.')
}

const ContentCity = ({ name, content, activityID }) => {
  const router = useRouter()

  const paragraph = content.split('.')
  const [activities, setActivities] = useState([])
  const [cityID, setCityID] = useState()

  useEffect(() => {
    setCityID(router.query.id)

    axios
      .get(
        `https://sandbox.musement.com/api/v3/cities/${
          cityID || activityID
        }/activities.json`
      )
      .then((res) => {
        const { data } = res
        setActivities(data.data)
      })
  }, [cityID])

  return (
    <div className={styles.ContentCity}>
      <p className={styles.firstParagraph}>{paragraph[0]}</p>
      <div>
        <h3>{name}</h3>
        <p className={styles.content}>{formatContentText(content)}</p>
      </div>
      <div>
        <h4>experiences</h4>
        <div className={styles.scroll}>
          {activities.length ? (
            activities
              .filter((activity) => activity.cover_image_url)
              .map((activity) => {
                const {
                  cover_image_url,
                  uuid,
                  city,
                  operational_days,
                } = activity
                return (
                  <CardActivity
                    image={cover_image_url}
                    code={operational_days}
                    relevance={activity?.verticals[0]?.relevance || ''}
                    city={city}
                    cityID={city.id}
                    uuid={uuid}
                    key={uuid}
                    allData={activity}
                  />
                )
              })
          ) : (
            <span>Loading...</span>
          )}
        </div>
      </div>
    </div>
  )
}
export default ContentCity
