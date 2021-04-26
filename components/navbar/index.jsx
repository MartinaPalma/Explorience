import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Arrow from '../arrow'

const Navbar = ({ onHandle, isArrow }) => {
  const [scrollPosY, setScrollPosY] = useState(0)

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
          <img className={styles.Navbar_cart} src="/cart.svg" alt="logo" />
          <span className={styles.Navbar_qty}>45</span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
