import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from './index.module.scss'

const Activity = () => {
  const router = useRouter()
  const [activity, setActivity] = useState()

  useEffect(() => {
    axios(
      `https://sandbox.musement.com/api/v3/activities/${
        router.query.uuid || localStorage.getItem('myCat')
      }`
    ).then((data) => {
      localStorage.setItem('myCat', router.query.uuid)
      setActivity(data.data)
    })
  }, [])

  return (
    <>
      {activity && (
        <div className={styles.Activity}>
          <h3>{activity.title}</h3>
          <img src={activity.cover_image_url} alt={activity.title} />
        </div>
      )}
    </>
  )
}

export default Activity
