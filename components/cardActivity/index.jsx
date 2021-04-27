import styles from './index.module.scss'
import Link from 'next/link'
import {
  encodeTitleToURL,
  formatDescriptionActivity,
  switchClass,
} from '../../utils/utils'
import Loader from '../loader'

const CardActivity = ({ data }) => {
  return (
    <>
      {data ? (
        <div className={styles.CardActivity}>
          <div className={styles.CardActivity_verticals}>
            {data?.verticals?.map((vertical, i) => {
              return (
                <div
                  className={styles[switchClass(vertical?.id)]}
                  key={vertical.cover_image_url}
                >
                  {vertical.name}
                </div>
              )
            })}
          </div>
          <Link
            href={{
              pathname: `/${data.uuid}`,
              query: {
                id: data.uuid,
                uuid: data.uuid,
                city: data.city,
              },
            }}
            as={`/${encodeTitleToURL(data.title)}`}
          >
            <img
              className={styles.CardActivity_image}
              src={
                data.cover_image_url
                  ? data.cover_image_url + '?fit=crop&h=225'
                  : 'https://dummyimage.com/350.jpg'
              }
              alt={data.title}
            />
          </Link>
          <div className={styles.CardActivity_details}>
            <p className={styles.CardActivity_city}>
              {data.city.name}, {data.city.country.name}
            </p>
            {data.reviews_avg > 0 && (
              <p className={styles.CardActivity_star}>{data.reviews_avg}</p>
            )}
          </div>
          <h5 className={styles.CardActivity_title}>{data.title}</h5>
          <p className={styles.CardActivity_description}>
            {formatDescriptionActivity(data?.description)}
          </p>
          <p className={styles.CardActivity_days}>{data.operational_days}</p>
          <div className={styles.CardActivity_info}>
            <p className={styles.CardActivity_price}>
              {data.retail_price.value} €
            </p>
            <Link
              href={{
                pathname: `/${data.uuid}`,
                query: {
                  id: data.uuid,
                  uuid: data.uuid,
                  city: data.city,
                },
              }}
              as={`/${encodeTitleToURL(data.title)}`}
            >
              <p className={styles.CardActivity_link}>Scopri di più</p>
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CardActivity
