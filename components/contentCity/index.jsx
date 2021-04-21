import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Figurine from '../figurine'
import Loader from '../loader'

import { formatContentText } from '../../utils/utils'

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
        }/activities.json?limit=100`,
        { headers: { 'Accept-Language': 'it-IT' } }
      )
      .then((res) => {
        const { data } = res
        setActivities(data.data)
      })
  }, [cityID])

  return (
    <div className={styles.ContentCity}>
      <p className={styles.firstParagraph}>{paragraph && paragraph[0]}</p>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{formatContentText(content)}</p>
        <h4 className={styles.contentTitle}>Esperienza</h4>
        <h5>Da Esperire: dimostrare, dare prova </h5>
        <em>Credo oggi aver esperto Ch’essere amato per valore io merto</em>
      </div>
      <div>
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
            <Loader />
          )}
        </div>
      </div>
    </div>
  )
}
export default ContentCity
