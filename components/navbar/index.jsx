import Link from 'next/link'
import { useEffect, useState, useContext } from 'react'
import styles from './index.module.scss'
import Arrow from '../arrow'
import Context from '../../context/index'

const Navbar = ({ onHandle, isArrow }) => {
  const [scrollPosY, setScrollPosY] = useState(0)

  const {
    state: {
      cart: { numProducts },
    },
  } = useContext(Context)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosY(window.scrollY))
  })

  return (
    <div
      className={`${styles.Navbar} ${scrollPosY <= 100 && styles.transparent}`}
    >
      <div
        className={`${styles.Navbar_container} ${isArrow && styles.padding} `}
      >
        <div className={styles.Navbar_links}>
          {isArrow && <Arrow onHandle={onHandle} />}
          <Link href="/">
            <img className={styles.Navbar_logo} src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={styles.Navbar_info}>
          <Link href="/cart">
            <img className={styles.Navbar_cart} src="/cart.svg" alt="logo" />
          </Link>
          <span className={styles.Navbar_qty}>{numProducts}</span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
