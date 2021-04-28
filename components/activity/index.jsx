import ContentActivity from '../contentActivity'
import HeaderActivity from '../headerActivity'
import styles from './index.module.scss'

const Activity = ({ activity }) => {
  return (
    <div className={styles.Activity}>
      <HeaderActivity activity={activity} />
      <ContentActivity activity={activity} />
    </div>
  )
}

export default Activity
