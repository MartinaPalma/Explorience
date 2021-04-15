import Head from 'next/head'
import CardActivities from '../components/cardactivities'
import MostVisitedCities from '../components/mostVisitedCities'
import styles from './index.module.scss'
import { HeaderHome } from '../components'

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>Explorience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderHome />
      <main>
        <section>
          <MostVisitedCities />
        </section>
        <section>
          <CardActivities />
        </section>
      </main>
    </div>
  )
}
