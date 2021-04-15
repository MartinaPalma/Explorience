import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from './index.module.scss'

const Activity = () => {
  const router = useRouter()

  const [activity, setActivity] = useState()
  const [notFound, setNotFound] = useState()

  useEffect(() => {
    axios(`https://sandbox.musement.com/api/v3/activities/${router.query.uuid}`)
      .then((data) => setActivity(data.data))
      .catch(() => setNotFound(true))
  }, [])

  return (
    <>
      {!notFound ? (
        activity ? (
          <div className={styles.Activity}>
            <h3>{activity.title}</h3>
            <img src={activity.cover_image_url} alt={activity.title} />
          </div>
        ) : (
          <div className={styles.loading}>loading...</div>
        )
      ) : (
        <h1>
          404 <br /> not found
        </h1>
      )}
    </>
  )
}

export default Activity
