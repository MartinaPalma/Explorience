import styles from './index.module.scss'
import Context from '../../context/index'
import { useContext } from 'react'

const Footer = () => {
  const context = useContext(Context)
  const { numProducts, totalCart } = context.state.cart

  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <div className={styles.nothing_actually}></div>
        <div className={styles.cart}>
          <p className={styles.numProducts}>Numero prodotti: {numProducts}</p>
          <p className={styles.totalPrice}>Totale: {totalCart.toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.info}>
        <p>Made with ❤️ & NextJS</p>
      </div>
    </div>
  )
}

export default Footer
