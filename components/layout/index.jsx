import styles from './index.module.scss'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children, onHandle, isArrow }) => {
  return (
    <div className={styles.Layout}>
      <Navbar onHandle={onHandle} isArrow={isArrow} />
      {children}
      <Footer className={styles.footer} />
    </div>
  )
}

export default Layout
