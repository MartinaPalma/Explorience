import axios from 'axios'
import styles from './index.module.scss'

import Activity from '../../components/activity'

const ActivityPage = ({ activity }) => {
  return (
    <div className={styles.ActivityPage}>
      {activity && <Activity activity={activity} />}
    </div>
  )
}

export default ActivityPage

export async function getServerSideProps({ query }) {
  const {
    data,
  } = await axios.get(
    `https://sandbox.musement.com/api/v3/activities/${query.uuid || query.id}`,
    { headers: { 'Accept-Language': 'it-IT' } }
  )

  return {
    props: {
      activity: data,
    },
  }
}
