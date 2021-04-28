import styles from './index.module.scss'

const ContentActivity = ({ activity }) => {
  return (
    <div className={styles.ContentActivity}>
      <h2 className={styles.ContentActivity_title}>{activity.title}</h2>
      <h2 className={styles.ContentActivity_city}>{activity.city.name}</h2>
      <p className={styles.ContentActivity_description}>
        {activity.description}
      </p>
      <h3 className={styles.ContentActivity_subtitle}>Cosa aspettarsi</h3>
      <p className={styles.ContentActivity_about}> {activity.about}</p>
      <p className={styles.ContentActivity_days}>{activity.operational_days}</p>
    </div>
  )
}
export default ContentActivity
