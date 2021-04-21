import ContentActivity from '../contentActivity'
import HeaderActivity from '../headerActivity'
import styles from './index.module.scss'

const Activity = ({ activity }) => {
  return (
    <div className={styles.Activity}>
      <HeaderActivity
        image={activity.cover_image_url}
        days={activity.operational_days}
        title={activity.title}
        city={activity.city.name}
      />
      <ContentActivity
        description={activity.description}
        about={activity.about}
      />
    </div>
  )
}

export default Activity
