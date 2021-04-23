import styles from './index.module.scss'
import { images } from '../../utils/images'

const Slider = () => {
  return (
    <div className={styles.Slider}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${images[3].url}")`,
        }}
      ></div>
      <div className={styles.title}>
        <h1>explorience</h1>
        <h2>
          Explore, Experience, <em style={{ color: '#3c9ace' }}>Enjoy</em>
        </h2>
      </div>
    </div>
  )
}

export default Slider
