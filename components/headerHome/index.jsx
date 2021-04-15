import styles from './index.module.scss'
import Slider from '../slider'

const HeaderHome = () => {
  return (
    <header className={styles.HeaderHome}>
      <Slider>
        <h1>explorience</h1>
        <h2>Explore, Experience, Enjoy</h2>
      </Slider>
    </header>
  )
}

export default HeaderHome
