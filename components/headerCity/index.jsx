import styles from './index.module.scss'

const HeaderCity = ({ image, name, country }) => {
  return (
    <div className={styles.HeaderCity}>
      <img src={image} alt={name} className={styles.HeaderCity_image} />
      <div className={styles.HeaderCity_text}>
        <h2 className={styles.HeaderCity_subtitle}>{country}</h2>
        <h1 className={styles.HeaderCity_title}>{name}</h1>
      </div>
    </div>
  )
}
export default HeaderCity
