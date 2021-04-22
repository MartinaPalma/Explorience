import styles from './index.module.scss'
import ActivityCardPrice from '../activityCardPrice'

const ContentActivity = ({ activity }) => {
  return (
    <div className={styles.ContentActivity}>
      <div className={styles.ContentActivity_text}>
        <h2 className={styles.ContentActivity_title}>Cosa aspettarsi</h2>
        <p className={styles.ContentActivity_description}> {activity.about}</p>
      </div>
      <div className={styles.ContentActivity_card}>
        <ActivityCardPrice
          image={activity.cover_image_url}
          title={activity.title}
          price={activity.retail_price.value}
          reviews={activity.reviews_avg}
        />
      </div>
    </div>
  )
}
export default ContentActivity
