import styles from './index.module.scss'

function CardActivity({ image, title, mark }) {
  return (
    <article className={styles.CardActivity}>
      <h5>{title}</h5>
      <p>{mark}</p>
      <img src={image} alt={title} />
      {/* <Link to={`/product/${product.id}`}>View details</Link> */}
    </article>
  )
}

export default CardActivity
