import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import CardActivity from '../cardActivity'
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
        }/activities.json?limit=10`,
        { headers: { 'Accept-Language': 'it-IT' } }
      )
      .then((res) => {
        const { data } = res
        setActivities(data.data)
      })
  }, [cityID])

  return (
    <div className={styles.ContentCity}>
      <p className={styles.ContentCity_firstParagraph}>
        {paragraph && paragraph[0]}
      </p>
      <div className={styles.ContentCity_content}>
        <h3 className={styles.ContentCity_title}>{name}</h3>
        <p className={styles.ContentCity_text}>{formatContentText(content)}</p>
        <h4 className={styles.ContentCity_experiences}>Esperienza</h4>
        <h5 className={styles.ContentCity_experiencesSubtitle}>
          Da Esperire: dimostrare, dare prova{' '}
        </h5>
        <em className={styles.ContentCity_quote}>
          Credo oggi aver esperto Ch’essere amato per valore io merto
        </em>
      </div>
      <div className={styles.ContentCity_activities}>
        <div className={styles.ContentCity_scroll}>
          {activities.length ? (
            activities.map((activity) => {
              return <CardActivity data={activity} key={activity.uuid} />
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
