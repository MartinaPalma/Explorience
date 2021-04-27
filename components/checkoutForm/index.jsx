import styles from './index.module.scss'

const CheckoutForm = ({ numProducts, totalCart }) => {
  return (
    <div className={styles.CheckoutForm}>
      <h1 className={styles.CheckoutForm_title}>Dettagli Pagamento</h1>
      <form className={styles.CheckoutForm_form}>
        <div className={styles.CheckoutForm_animation}>
          <input
            className={styles.CheckoutForm_animation_input}
            type="text"
            name="name"
            id="name"
            required
          />
          <label className={styles.CheckoutForm_animation_label} htmlFor="name">
            <span className={styles.CheckoutForm_animation_span}>
              Nome completo
            </span>
          </label>
        </div>
        <div className={styles.CheckoutForm_animation}>
          <input
            className={styles.CheckoutForm_animation_input}
            type="text"
            name="card"
            id="card"
            required
          />
          <label className={styles.CheckoutForm_animation_label} htmlFor="card">
            <span className={styles.CheckoutForm_animation_span}>
              Numero carta
            </span>
          </label>
        </div>

        <div className={styles.CheckoutForm_details}>
          <div className={styles.CheckoutForm_details_wrapperDate}>
            <label className={styles.CheckoutForm_details_label} htmlFor="date">
              Scadenza
            </label>
            <input
              className={`${styles.CheckoutForm_details_input} ${styles.CheckoutForm_details_inputDate}`}
              type="text"
              name="month"
              id="month"
              min="1"
              max="12"
              maxLength="2"
              placeholder="MM"
              required
            />
            <span>/</span>
            <input
              className={`${styles.CheckoutForm_details_input} ${styles.CheckoutForm_details_inputDate}`}
              type="text"
              name="year"
              id="year"
              placeholder="AA"
              min="20"
              maxLength="2"
              required
            />
          </div>

          <div className={styles.CheckoutForm_details_wrapperCVV}>
            <label className={styles.CheckoutForm_details_label} htmlFor="date">
              CVV
            </label>
            <input
              className={styles.CheckoutForm_details_input}
              maxLength="3"
              pattern="([0-1][0-9]-[0-9][0-9]"
              type="password"
              name="cvv"
              id="cvv"
              placeholder="***"
              required
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.CheckoutForm_btnCart}>
            <img src="/cart.svg" alt="cart" />
            <div className={styles.CheckoutForm_number}>{numProducts}</div>
          </button>
          <button className={styles.CheckoutForm_button} type="button">
            Acquista ora{' '}
            <span className={styles.CheckoutForm_totalCart}>{totalCart}</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
