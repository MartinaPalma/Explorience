import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Figurine from '../figurine'

const formatContentText = (content) => {
  const textArr = content && content.split('.')
  return content && textArr.splice(1, textArr.length - 2).join('.')
}

const ContentCity = ({ name, content, activityID }) => {
  const router = useRouter()

  const paragraph = content && content.split('.')
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
      <p className={styles.firstParagraph}>{paragraph && paragraph[0]}</p>
      <div>
        <h3>{name}</h3>
        <p className={styles.content}>{formatContentText(content)}</p>
      </div>
      <div>
        <h4>experiences</h4>
        <div className={styles.scroll}>
          {activities.length ? (
            activities.map((activity) => {
              return (
                <Figurine
                  endPoint="activities"
                  data={activity}
                  key={activity.uuid}
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
