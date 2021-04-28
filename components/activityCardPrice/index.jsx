import styles from './index.module.scss'

import Context from '../../context/index'
import { useContext } from 'react'

import { turnIntoPrice } from '../../utils/utils'

const ActivityCardPrice = ({
  image,
  price,
  title,
  reviews,
  activityType,
  city,
  id,
}) => {
  const context = useContext(Context)
  const {
    state: {
      cart: { listProduct },
    },
  } = context

  return (
    <div className={styles.ActivityCardPrice}>
      <img className={styles.ActivityCardPrice_image} src={image} alt={title} />
      <h3 className={styles.ActivityCardPrice_title}>{title}</h3>
      {reviews > 0 && (
        <p className={styles.ActivityCardPrice_star}>{reviews}</p>
      )}
      <button
        className={styles.ActivityCardPrice_price}
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
        Acquista {turnIntoPrice(price)}
      </button>
    </div>
  )
}

export default ActivityCardPrice
