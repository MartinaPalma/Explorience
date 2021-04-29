import styles from './index.module.scss'
import { images } from '../../utils/images'

const HeaderHome = () => {
  return (
    <header className={styles.HeaderHome}>
      <div className={styles.HeaderHome_image}></div>

      <div className={styles.HeaderHome_titleWrapper}>
        <h1 className={styles.HeaderHome_title}>explorience</h1>
        <h2 className={styles.HeaderHome_subtitle}>
          Explore, Experience, <em>Enjoy</em>
        </h2>
      </div>

      <div className={styles.HeaderHome_cityWrapper}>
        <h3 className={styles.HeaderHome_city}>Dubai</h3>
        <p className={styles.HeaderHome_aphorisms}>
          Le persone non fanno i viaggi, sono i viaggi che fanno le persone
        </p>
        <a
          href="https://explorience.vercel.app/city/Dubai"
          className={styles.HeaderHome_button}
        >
          Visita
        </a>
      </div>
    </header>
  )
}

export default HeaderHome
