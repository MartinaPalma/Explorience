import styles from './index.module.scss'
import Link from 'next/link'

import Loader from '../loader'

const CardCity = ({ data }) => {
  return (
    <>
      {typeof data !== undefined ? (
        <div className={styles.CardCity}>
          <Link
            href={{
              pathname: `${data.id ? `/city/${data.id}` : `/404`}`,
              query: {
                id: data.id,
                uuid: data.uuid,
                city: data.city,
              },
            }}
            as={`/city/${data.name}`}
          >
            <img
              className={styles.CardCity_image}
              src={
                data.cover_image_url
                  ? data.cover_image_url + '?fit=crop&h=350'
                  : 'https://dummyimage.com/350.jpg'
              }
              alt={data.name}
            />
          </Link>

          <div className={styles.CardCity_texts}>
            <div className={styles.CardCity_title}>
              <h5 className={styles.CardCity_name}>{data.name}</h5>
              <p className={styles.CardCity_activities}>
                {data.activities_count && data.activities_count + ' attività'}
              </p>
            </div>
            <img
              src="/arrowcity.svg"
              alt="arrowcity"
              className={styles.CardCity_arrow}
            ></img>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CardCity
