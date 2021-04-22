import Link from 'next/link'
import styles from './index.module.scss'

const Page404 = ({}) => {
  return (
    <div className={styles.body}>
      <div className={styles.textContainer}>
        <h3>La bussola è impazzita!</h3>
        <p>
          La meta ambita sembra essere irragiungibile...{' '}
          <strong>lasciati guidare da noi</strong>!
        </p>
        <Link href="/">
          <button type="button">Explore!</button>
        </Link>
      </div>
      <div className={styles.illustration}>
        <div className={styles.cloud}>
          <img src="https://i.pinimg.com/originals/19/8d/ae/198daeda14097d45e417e62ff283f10e.png" />
        </div>
        <div className={styles.cloud}>
          <img src="https://i.pinimg.com/originals/19/8d/ae/198daeda14097d45e417e62ff283f10e.png" />
        </div>
        <div className={styles.isle}>
          <h3 className={styles.isleTitle}>404</h3>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/84113933261727.Y3JvcCwxNDcyLDExNTEsMCwzNDg.png" />
        </div>
      </div>
    </div>
  )
}

export default Page404
