import styles from './index.module.scss'

import { useContext } from 'react'
import Context from '../../context/index'

const Modal = () => {
  const context = useContext(Context)
  const { visible } = context.state.modal

  setTimeout(() => {
    context.dispatch({ type: 'VISIBLE_MODAL', payload: false })
  }, 5000)

  return (
    <div
      className={`${styles.modal} ${visible && styles.isVisibile}`}
      onClick={() =>
        context.dispatch({ type: 'VISIBLE_MODAL', payload: false })
      }
    >
      <img src="/cart.svg" alt="cart" /> <p>Aggiunto al carrello!</p>
      <div className={styles.closeBtn}></div>
    </div>
  )
}

export default Modal
