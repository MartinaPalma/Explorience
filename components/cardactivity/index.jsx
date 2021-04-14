import styles from './index.module.scss'

function CardActivity({ image, code, relevance }) {
  return (
    <article className={styles.CardActivity}>
      <h5 className={styles.relevance}>{code}</h5>
      <img src={image} alt={code} />
      <p style={{ color: '#171717' }}>{relevance / 10 / 2}</p>
    </article>
  )
}

export default CardActivity
