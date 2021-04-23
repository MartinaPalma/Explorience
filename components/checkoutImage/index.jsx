import styles from './index.module.scss'

const CheckoutImage = () => {
  return (
    <div className={styles.CheckoutImage}>
      <p className={styles.CheckoutImage_text}>Explore, Experience, Enjoy</p>
      <h3 className={styles.CheckoutImage_totalPrice}>2450 €</h3>
      <p className={styles.CheckoutImage_totalProducts}>35 acquisti</p>
      <img
        className={styles.CheckoutImage_image}
        src="https://i.imgur.com/Rmw4GwX.png"
        alt="Explorience"
      />
    </div>
  )
}

export default CheckoutImage
