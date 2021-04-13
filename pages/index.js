import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Explorience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <strong>Section 1</strong>
        </section>
        <section>
          <strong>Section 2</strong>
        </section>
      </main>
    </div>
  )
}
