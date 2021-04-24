import styles from './index.module.scss'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      {children}
      <Footer className={styles.footer} />
    </div>
  )
}

export default Layout
