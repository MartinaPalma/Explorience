import styles from './index.module.scss'
import Product from '../product'

import { turnIntoPrice } from '../../utils/utils'

const CartList = ({ numProducts, totalCart, listProduct }) => {
  return (
    <div className={styles.CartList}>
      <h2 className={styles.CartList_title}>Attività acquistate</h2>
      <div className={styles.CartList_list}>
        {listProduct.length ? (
          listProduct.map((product, i) => (
            <Product key={product.id + i} product={product} />
          ))
        ) : (
          <p>Aggiungi un'attività al carrello e torna pure!</p>
        )}
      </div>
      <div className={styles.CartList_priceWrapper}>
        <div>
          <p className={styles.CartList_total}>Totale</p>
          <p className={styles.CartList_totalProduct}>
            Numero attività: {numProducts}
          </p>
        </div>
        <p className={styles.CartList_totalPrice}>{turnIntoPrice(totalCart)}</p>
      </div>
    </div>
  )
}

export default CartList
