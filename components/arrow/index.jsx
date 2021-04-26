import styles from './index.module.scss'

const Arrow = ({ onHandle }) => {
  return (
    <div className={styles.Arrow} onClick={onHandle}>
      <img className={styles.Arrow_icon} src="/arrow.svg" alt="Explorience" />
    </div>
  )
}
export default Arrow
