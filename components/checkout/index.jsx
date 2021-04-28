import styles from './index.module.scss'
import Button from '../button'
import Input from '../input'

const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <h1 className={styles.Checkout_title}>Dettagli Pagamento</h1>
      <form className={styles.Checkout_form}>
        <Input name="email" type="email" title="Email" />
        <Input name="name" type="text" title="Nome completo" />
        <Input name="card" type="text" title="Numero carta" />

        <div className={styles.Checkout_details}>
          <div className={styles.Checkout_wrapperDate}>
            <label className={styles.Checkout_label} htmlFor="date">
              Scadenza
            </label>
            <input
              className={`${styles.Checkout_input} ${styles.Checkout_inputDate}`}
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
              className={`${styles.Checkout_input} ${styles.Checkout_inputDate}`}
              type="text"
              name="year"
              id="year"
              placeholder="AA"
              min="20"
              maxLength="2"
              required
            />
          </div>

          <div className={styles.Checkout_wrapperCVV}>
            <label className={styles.Checkout_label} htmlFor="date">
              CVV
            </label>
            <input
              className={styles.Checkout_input}
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
        <Button text="Acquista ora" type="button" />
      </form>
    </div>
  )
}

export default Checkout
