import styles from './index.module.scss'

const HeaderActivity = ({ days, image, title, city }) => {
  return (
    <div className={styles.HeaderActivity}>
      <img src={image} alt={title} />

      <div className={styles.title}>
        <p>{days}</p>
        <h1>{title}</h1>
        <h2>{city}</h2>
      </div>
    </div>
  )
}
export default HeaderActivity
