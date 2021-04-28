import styles from './index.module.scss'
import { turnIntoPrice } from '../../utils/utils.js'

import Context from '../../context/index'
import { useContext } from 'react'

const Product = ({ product }) => {
  const context = useContext(Context)

  return (
    <div className={styles.Product}>
      <div className={styles.Product_wrapper}>
        <img src="/location.svg" alt="" className={styles.Product_icon} />
        <p className={styles.Product_name}>{product.title}</p>
      </div>
      <div className={styles.Product_info}>
        <div>
          <p className={styles.Product_code}>{product.activityType}</p>
          <p className={styles.Product_timeZone}>{product.city}</p>
        </div>
        <p className={styles.Product_price}>{turnIntoPrice(product.price)}</p>
      </div>
      <button
        className={styles.Product_delBtn}
        onClick={() =>
          context.dispatch({ type: 'REMOVE_ITEM_CART', payload: product })
        }
      >
        X
      </button>
    </div>
  )
}

export default Product
