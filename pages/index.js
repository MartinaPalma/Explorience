import Head from 'next/head'
import styles from './index.module.scss'
import Layout from '../components/layout'
import { HeaderHome } from '../components'
import FigurineContainer from '../components/figurineContainer'

export default function Home() {
  return (
    <Layout>
      <div className={styles.Home}>
        <Head>
          <title>Explorience</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeaderHome />

        <main>
          <FigurineContainer
            endPoint="cities"
            titleComp="Scopri le città più visitate"
            subTitleComp="Lasciati ispirare dalle mete più ambite"
          />
          <FigurineContainer
            endPoint="activities"
            titleComp="Scopri le attività più ricercate"
            subTitleComp="Lasciati trasportare dalle attività più ambite"
          />
        </main>
      </div>
    </Layout>
  )
}
