import styles from './index.module.scss'

const CardCities = ({ activities_count, name, image }) => {
  return (
    <article className={styles.CardCities}>
      <h5>{name}</h5>
      <p>{activities_count}</p>
      <img src={image} alt={name} />
    </article>
  )
}

export default CardCities
