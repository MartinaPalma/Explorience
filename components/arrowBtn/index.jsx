import styles from './index.module.scss'

const ArrowBtn = ({ text, onHandle }) => {
  return (
    <button className={styles.arrowBtn} onClick={onHandle}>
      {text}
    </button>
  )
}

export default ArrowBtn
