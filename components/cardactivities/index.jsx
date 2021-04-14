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
            return (
              <CardActivity
                allData={activity}
                city={activity.city}
                uuid={activity.uuid}
                image={activity.cover_image_url}
                code={activity.verticals[0].code}
                relevance={activity.verticals[0].relevance}
                key={activity.uuid}
              />
            )
          })}
      </div>
    </section>
  )
}

export default CardActivities
