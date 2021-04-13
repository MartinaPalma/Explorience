import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explorience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Header</header>

      <main className={styles.main}>Main</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}
