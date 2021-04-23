import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'

const Navbar = () => {
  const [scrollPosY, setScrollPosY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollPosY(window.scrollY))
  })

  return (
    <div
      className={`${styles.Navbar} ${scrollPosY <= 100 && styles.transparent}`}
    >
      <Link href="/">
        <img className={styles.logo} src="/logo-light.svg" alt="logo" />
      </Link>
      {/* <h3 className={styles.logo}>Explorience</h3> */}
    </div>
  )
}
export default Navbar
