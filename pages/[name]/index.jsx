import axios from 'axios'
import styles from './index.module.scss'
import { useEffect } from 'react'

import Arrow from '../../components/arrow'
import Activity from '../../components/activity'
import Modal from '../../components/modal'
import { useRouter } from 'next/router'

const ActivityPage = ({ activity }) => {
  const router = useRouter()

  useEffect(() => {
    activity === '' && router.push('/404')
  }, [])

  return (
    <>
      <Modal />
      <Arrow isBackCity={false} onHandle={router.back} />
      {activity && (
        <div className={styles.ActivityPage}>
          <Activity activity={activity} />
        </div>
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
