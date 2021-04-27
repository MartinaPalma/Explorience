import styles from './index.module.scss'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Layout, CheckoutImage, CheckoutForm } from '../../components'
import Context from '../../context/index'

const Checkout = () => {
  const router = useRouter()
  const {
    state: {
      cart: { numProducts, totalCart },
    },
  } = useContext(Context)

  return (
    <Layout isArrow={true} onHandle={router.back}>
      <div className={styles.background}></div>
      <div className={styles.Checkout}>
        <div className={styles.Checkout_wrapper}>
          <CheckoutImage numProducts={numProducts} totalCart={totalCart} />
          <CheckoutForm numProducts={numProducts} totalCart={totalCart} />
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
