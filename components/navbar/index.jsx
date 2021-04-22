import Link from 'next/link'
import styles from './index.module.scss'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <h3 className={styles.logo}>Explorience</h3>
      </Link>
    </div>
  )
}
export default Navbar
