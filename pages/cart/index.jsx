import styles from './index.module.scss'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { Layout, CartList, Checkout } from '../../components'
import Context from '../../context/index'

const Cart = () => {
  const router = useRouter()
  const {
    state: {
      cart: { numProducts, totalCart, listProduct },
    },
  } = useContext(Context)

  return (
    <Layout isArrow={true} onHandle={router.back}>
      <div className={styles.background}></div>
      <div className={styles.Cart}>
        <CartList
          numProducts={numProducts}
          totalCart={totalCart}
          listProduct={listProduct}
        />
        <Checkout />
      </div>
    </Layout>
  )
}

export default Cart
