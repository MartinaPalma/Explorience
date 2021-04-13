import styles from './index.module.scss'

const CardCities = ({ mark, title, image }) => {
  return (
    <article className={styles.CardCities}>
      <h5>{title}</h5>
      <p>{mark}</p>
      <img src={image} alt={title} />
    </article>
  )
}

export default CardCities
