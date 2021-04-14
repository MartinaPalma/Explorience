import CardActivity from '../cardactivity'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const CardActivities = () => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
    axios.get('https://sandbox.musement.com/api/v3/activities').then((res) => {
      const { data } = res
      setActivities(data.data)
    })
  }, [])
  return (
    <section className={styles.CardActivities}>
      <h3>Scopri le attività più ricercate</h3>
      <h4>Lasciati trasportare dalle attività più ambite</h4>
      <div className={styles.scroll}>
        {activities
          .filter((activity) => activity.cover_image_url)
          .map((activity) => {
            const { cover_image_url, uuid } = activity
            return (
              <CardActivity
                image={cover_image_url}
                code={activity.verticals[0].code}
                relevance={activity.verticals[0].relevance}
                key={uuid}
              />
            )
          })}
      </div>
    </section>
  )
}

export default CardActivities
