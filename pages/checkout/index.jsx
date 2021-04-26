import styles from './index.module.scss'
import { useRouter } from 'next/router'
import { Layout, CheckoutImage, CheckoutForm } from '../../components'
const Checkout = () => {
  const router = useRouter()
  return (
    <Layout isArrow={true} onHandle={router.back}>
      <div className={styles.Checkout}>
        <div className={styles.Checkout_wrapper}>
          <CheckoutImage />
          <CheckoutForm />
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
