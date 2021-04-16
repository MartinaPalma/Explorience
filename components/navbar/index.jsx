import styles from './index.module.scss'

const Navbar = () => {
  return (
    <div className={`${styles.Navbar}`}>
      <img className={styles.arrow} src="/arrow.svg" alt="Explorience" />
      <h3 className={styles.logo}>Explorience</h3>
    </div>
  )
}
export default Navbar
