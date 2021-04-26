import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.newsletter}>
          <div className={styles.text}>
            <h3>Iscriviti alla nostra newsletter</h3>
            <p>Nessuna paura, non ti inonderemo di spam, noi !</p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Scrivi la tua email" />
            <button className={styles.bottone}> Iscriviti </button>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.wrapper}>
        <div className={styles.links}>
          <div className={styles.who}>
            <img
              className={styles.logo}
              src="./logo-dark.svg"
              alt="explorience-logo"
            />
            <p>Explore, Experience, Enjoy</p>
          </div>
          <div className={styles.cities}>
            <strong>Top Città</strong>
            <ul>
              <li>Roma</li>
              <li>Milano</li>
              <li>Firenze</li>
              <li>Torino</li>
              <li>Palermo</li>
              <li>Venezia</li>
            </ul>
          </div>
          <div className={styles.activities}>
            <strong>Top Attività</strong>
            <ul>
              <li>Museo di Van Gogh</li>
              <li>Amsterdam Dungeon</li>
              <li>Musei Vaticani</li>
              <li>Cenacolo Vinciano</li>
              <li>Biglietti Blue Note</li>
              <li>Tour Monte-Carlo</li>
              <li>Deserto di Al Maha</li>
            </ul>
          </div>
          <div className={styles.social}>
            <strong>Sui Social</strong>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className={styles.info}>
          <p>Made with ❤️ & NextJS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
