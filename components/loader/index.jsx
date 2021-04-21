import styles from './index.module.scss'

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.content}>
        <div></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}

export default Loader
