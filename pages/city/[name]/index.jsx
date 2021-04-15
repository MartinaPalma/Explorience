import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from './index.module.scss'

const City = () => {
  const router = useRouter()
  const [city, setCity] = useState()

  useEffect(() => {
    axios(
      `https://sandbox.musement.com/api/v3/cities/${
        router.query.id || localStorage.getItem('localStorageCity')
      }`
    ).then((data) => {
      setCity(data.data)
      city && localStorage.setItem('localStorageCity', router.query.id)
    })
  }, [])

  return (
    <>
      {city ? (
        <div className={styles.City}>
          <h3>{city.name}</h3>
          <img src={`${city.cover_image_url}?fit=crop&h=400`} alt={city.name} />
        </div>
      ) : (
        <div className={styles.loading}>Loading...</div>
      )}
    </>
  )
}

export default City
