import styles from './index.module.scss'
import CheckoutForm from '../../components/checkoutForm'
import CheckoutImage from '../../components/checkoutImage'
const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles.Checkout_wrapper}>
        <CheckoutImage />
        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout
