import axios from 'axios'
import styles from './index.module.scss'

const Activity = ({ activity }) => {
  return (
    <>
      {activity && (
        <div className={styles.Activity}>
          <h3>{activity.title}</h3>
          <img src={activity.cover_image_url} alt={activity.title} />
        </div>
      )}
    </>
  )
}

export default Activity

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(
    `https://sandbox.musement.com/api/v3/activities/${query.uuid || query.id}`
  )

  return {
    props: {
      activity: data,
    },
  }
}
