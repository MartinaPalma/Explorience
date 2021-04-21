import axios from 'axios'
import styles from './index.module.scss'

import Activity from '../../components/activity'

const ActivityPage = ({ activity }) => {
  return (
    <>
      {activity ? (
        <div className={styles.ActivityPage}>
          <Activity activity={activity} />
        </div>
      ) : (
        <p>PAGE 404!</p>
      )}
    </>
  )
}

export default ActivityPage

export async function getServerSideProps({ query }) {
  let data = []

  try {
    data = await axios.get(
      `https://sandbox.musement.com/api/v3/activities/${query.uuid}`,
      { headers: { 'Accept-Language': 'it-IT' } }
    )
  } catch (error) {
    data = { data: '' }
  }

  return {
    props: {
      activity: data.data,
    },
  }
}
