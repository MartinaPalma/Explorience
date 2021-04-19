import styles from './index.module.scss'

const ContentActivity = ({ description, about }) => {
  return (
    <div className={styles.ContentActivity}>
      <p className={styles.description}>{description}</p>
      <h3>Cosa Aspettarsi</h3>
      <p className={styles.about}>{about}</p>
    </div>
  )
}
export default ContentActivity
