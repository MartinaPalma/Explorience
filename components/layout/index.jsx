import styles from './index.module.scss'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
