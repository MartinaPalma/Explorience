import styles from './index.module.scss'

const HeaderCity = ({ image, name, country }) => {
  return (
    <div className={styles.HeaderCity}>
      <img src={image} alt={name} />
      <div>
        <h2>{country}</h2>
        <h1>{name}</h1>
      </div>
    </div>
  )
}
export default HeaderCity
