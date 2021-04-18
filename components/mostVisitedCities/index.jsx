import CardCities from '../CardCities'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MostVisitedCities = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    axios
      .get('https://sandbox.musement.com/api/v3/cities.json')
      .then(({ data }) => setCities(data))
  }, [])

  return (
    <section className={styles.MostVisitedCities}>
      <h3>Scopri le città più visitate</h3>
      <h4>Lasciati ispirare dalle mete più ambite</h4>

      <div className={styles.scroll}>
        {cities
          .filter(({ activities_count }) => activities_count >= 100)
          .map(({ cover_image_url, activities_count, name, uuid, id }) => {
            return (
              <CardCities
                image={`${cover_image_url}?fit=crop&h=150`}
                name={name}
                activities_count={activities_count}
                id={id}
                uuid={uuid}
                key={uuid}
              />
            )
          })}
      </div>
    </section>
  )
}

export default MostVisitedCities
