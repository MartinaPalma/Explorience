import styles from './index.module.scss'

import Context from '../../context/index'
import { useContext } from 'react'

const ActivityCardPrice = ({ image, price, title, reviews }) => {
  const context = useContext(Context)

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
          context.dispatch({ type: 'ADD_PRODUCT', payload: price })
          context.dispatch({ type: 'INCREMENT_PRODUCT' })
          context.dispatch({ type: 'VISIBLE_MODAL', payload: true })
        }}
      >
        Acquista {price} €
      </button>
    </div>
  )
}

export default ActivityCardPrice
