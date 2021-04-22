import styles from './index.module.scss'

const Arrow = ({ isBackCity, onHandle }) => {
  return (
    <div
      className={`${styles.Arrow} ${
        isBackCity ? styles.backCity : styles.backActivity
      }`}
      onClick={onHandle}
    >
      <img className={styles.Arrow_icon} src="/arrow.svg" alt="Explorience" />
    </div>
  )
}
export default Arrow
