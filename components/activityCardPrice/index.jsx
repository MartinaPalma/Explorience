import styles from './index.module.scss'

const ActivityCardPrice = ({ image, price, title, reviews }) => {
  return (
    <div className={styles.ActivityCardPrice}>
      <img className={styles.ActivityCardPrice_image} src={image} alt={title} />

      <h3 className={styles.ActivityCardPrice_title}>{title}</h3>
      {reviews > 0 && (
        <p className={styles.ActivityCardPrice_star}>{reviews}</p>
      )}
      <button className={styles.ActivityCardPrice_price}>
        Acquista {price} €
      </button>
    </div>
  )
}

export default ActivityCardPrice
