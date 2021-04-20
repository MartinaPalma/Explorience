import axios from 'axios'
import styles from './index.module.scss'

import HeaderCity from '../../../components/headerCity'
import ContentCity from '../../../components/contentCity'

const getPairCitiesIDs = (cities) => cities.map((city) => [city.name, city.id])

const getCity = (cityName, cities) =>
  cities.find((city) => city.includes(cityName))

const City = ({ city }) => {
  return (
    <>
      {city && (
        <div className={styles.City}>
          <HeaderCity
            image={city.cover_image_url + '?fit=crop&h=900'}
            name={city.name}
            country={city.country.name}
          />
          <ContentCity
            name={city.name}
            content={city.content}
            activityID={city.id}
          />
        </div>
      )}
    </>
  )
}

export default City

export async function getServerSideProps(context) {
  const resCities = await axios.get(
    'https://sandbox.musement.com/api/v3/cities.json',
    { headers: { 'Accept-Language': 'it-IT' } }
  )

  const resCity = await axios.get(
    `https://sandbox.musement.com/api/v3/cities/${
      getCity(context.query.name, getPairCitiesIDs(resCities.data))[1]
    }`,
    { headers: { 'Accept-Language': 'it-IT' } }
  )

  return {
    props: {
      cities: resCities.data,
      city: resCity.data,
      query: context.query,
    },
  }
}
