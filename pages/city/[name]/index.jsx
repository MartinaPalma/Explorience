import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import styles from './index.module.scss'

import HeaderCity from '../../../components/headerCity'
import ContentCity from '../../../components/contentCity'

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
      {city && (
        <div className={styles.City}>
          <HeaderCity
            image={city.cover_image_url}
            name={city.name}
            country={city.country.name}
          />
          <ContentCity name={city.name} content={city.content} />
        </div>
      )}
    </>
  )
}

export default City
