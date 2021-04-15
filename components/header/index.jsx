import Link from 'next/link'
import styles from './index.module.scss'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <div className={styles.logo}>HEADER</div>
      </Link>
    </div>
  )
}

export default Header
