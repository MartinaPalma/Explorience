import Link from 'next/link'
import styles from './index.module.scss'

const Navbar = () => {
  return (
    <div className={`${styles.Navbar}`}>
      <img className={styles.arrow} src="/arrow.svg" alt="Explorience" />
      <Link href="/">
        <h3 className={styles.logo}>Explorience</h3>
      </Link>
    </div>
  )
}
export default Navbar
