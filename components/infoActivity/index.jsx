import styles from './index.module.scss'
import { useContext } from 'react'
import Head from 'next/head'
import Context from '../../context/index'

import { turnIntoPrice } from '../../utils/utils'
import Map from '../map'

const InfoActivity = ({ activity }) => {
  const context = useContext(Context)
  const {
    state: {
      cart: { listProduct },
    },
  } = context

  const { title } = activity
  const id = activity.uuid
  const price = activity.retail_price.value
  const activityType = activity?.verticals[0]?.name
  const city = activity.city.name

  return (
    <div className={styles.InfoActivity}>
      <Head>
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.2.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.map}>
        <Map lng={activity.city.longitude} lat={activity.city.latitude} />
      </div>

      <div className={styles.InfoActivity_container}>
        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.giftable && styles.opacity
          }`}
        >
          <img
            src="/giftbox.svg"
            alt="regalabile"
            className={styles.InfoActivity_icon}
          />
          <p>Regalabile</p>
        </div>
        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.daily && styles.opacity
          }`}
        >
          <img
            src="/daily.svg"
            alt="giornaliero"
            className={styles.InfoActivity_icon}
          />
          <p>Giornaliero</p>
        </div>
        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.special_offer && styles.opacity
          }`}
        >
          <img
            src="/special.svg"
            alt="Speciale offerta"
            className={styles.InfoActivity_icon}
          />
          <p>Speciale offerta</p>
        </div>
      </div>
      <div className={styles.InfoActivity_container}>
        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.is_available_today && styles.opacity
          }`}
        >
          <img
            src="/24-hours.svg"
            alt="Disponibile oggi"
            className={styles.InfoActivity_icon}
          />
          <p>Disponibile oggi</p>
        </div>
        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.is_available_tomorrow && styles.opacity
          }`}
        >
          <img
            src="/tomorrow.svg"
            alt="Disponibile domani"
            className={styles.InfoActivity_icon}
          />
          <p>Disponibile domani</p>
        </div>

        <div
          className={`${styles.InfoActivity_wrapperIcon} ${
            !activity.free_cancellation && styles.opacity
          }`}
        >
          <img
            src="/cancellation.svg"
            alt="Cancellazione Gratuita"
            className={styles.InfoActivity_icon}
          />
          <p>Cancellazione gratuita</p>
        </div>
      </div>
      <div className={styles.InfoActivity_numbers}>
        <div className={styles.InfoActivity_info}>
          <h1 className={styles.InfoActivity_title}>{activity.title}</h1>
          {activity.reviews_avg > 0 && (
            <p className={styles.InfoActivity_star}>{activity.reviews_avg}</p>
          )}
        </div>
        <div className={styles.InfoActivity_sell}>
          <p className={styles.InfoActivity_price}>
            {turnIntoPrice(activity.retail_price.value)}
          </p>
          <button
            className={styles.InfoActivity_btn}
            onClick={() => {
              if (!listProduct.find((item) => item.id === id)) {
                context.dispatch({ type: 'ADD_PRODUCT', payload: price })
                context.dispatch({ type: 'INCREMENT_PRODUCT' })
                context.dispatch({ type: 'VISIBLE_MODAL', payload: true })
                context.dispatch({
                  type: 'ADD_PRODUCT_TO_LIST',
                  payload: { title, activityType, city, price, id },
                })
              }
            }}
          >
            Acquista ora
            <span className={styles.InfoActivity_priceBtn}>
              {activity.retail_price.value}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default InfoActivity
