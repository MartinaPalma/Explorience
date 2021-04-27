import styles from './index.module.scss'

const CheckoutImage = ({ numProducts, totalCart }) => {
  return (
    <div className={styles.CheckoutImage}>
      {numProducts ? (
        <>
          <p className={styles.CheckoutImage_text}>
            Explore, Experience, Enjoy
          </p>
          <h3 className={styles.CheckoutImage_totalPrice}>{totalCart} €</h3>
          <p className={styles.CheckoutImage_totalProducts}>
            {numProducts} acquisti!
          </p>
        </>
      ) : (
        <p className={styles.CheckoutImage_text}>
          Aggiungi un'attività al carrello!
        </p>
      )}
      <img
        className={styles.CheckoutImage_image}
        src="https://i.imgur.com/Rmw4GwX.png"
        alt="Explorience"
      />
    </div>
  )
}

export default CheckoutImage
