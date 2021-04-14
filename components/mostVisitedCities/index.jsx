import CardCities from '../CardCities'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MostVisitedCities = () => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get('https://sandbox.musement.com/api/v3/cities').then((res) => {
      const { data } = res
      setCities(data)
    })
  }, [])
  return (
    <section className={styles.MostVisitedCities}>
      <h3>Scopri le città più visitate</h3>
      <h4>Lasciati ispirare dalle mete più ambite</h4>
      <div className={styles.scroll}>
        {cities.map((city) => {
          const { cover_image_url, activities_count, name, uuid } = city
          return (
            <CardCities
              image={cover_image_url}
              name={name}
              activities_count={activities_count}
              key={uuid}
            />
          )
        })}
      </div>
    </section>
  )
}

export default MostVisitedCities
