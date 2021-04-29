import ContentActivity from '../contentActivity'
import InfoActivity from '../infoActivity'

import styles from './index.module.scss'
import { applyFilterToJpeg } from '../../utils/utils'

const Activity = ({ activity }) => {
  return (
    <div className={styles.Activity}>
      <div className={styles.Activity_hero}>
        <h1 className={styles.Activity_city}>{activity.city.name}</h1>
        <img
          src={applyFilterToJpeg(activity.cover_image_url, '?w=1300')}
          alt={activity.title}
          className={styles.Activity_image}
        />
      </div>
      <div className={styles.Activity_content}>
        <ContentActivity activity={activity} />
        <InfoActivity activity={activity} />
      </div>
      <div className={styles.background}></div>
    </div>
  )
}

export default Activity
