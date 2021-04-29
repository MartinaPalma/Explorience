import axios from 'axios'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { Layout, Modal, Activity } from '../../components'
import { useRouter } from 'next/router'

const ActivityPage = ({ activity }) => {
  const router = useRouter()

  useEffect(() => {
    activity === '' && router.push('/404')
  }, [])

  return (
    <Layout isArrow={true} onHandle={router.back}>
      <Modal />
      {activity && (
        <div className={styles.ActivityPage}>
          <Activity activity={activity} />
        </div>
      )}
    </Layout>
  )
}

ActivityPage.getInitialProps = async (ctx) => {
  let res = []

  try {
    res = await axios.get(
      `https://sandbox.musement.com/api/v3/activities/${ctx.query.uuid}`,
      { headers: { 'Accept-Language': 'it-IT' } }
    )
  } catch (error) {
    res = { data: '' }
  }

  return {
    activity: res.data,
  }
}

export default ActivityPage
