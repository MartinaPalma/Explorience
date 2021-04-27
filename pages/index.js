import Head from 'next/head'
import styles from './index.module.scss'
import { HeaderHome, Layout, FigurineContainer } from '../components'
import vintageCities from '../utils/vintageCities.js'
import spaceCities from '../utils/spaceCities.js'

export default function Home() {
  return (
    <Layout isArrow={false}>
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

          <FigurineContainer
            endPoint={vintageCities}
            titleComp="Il classico intramontabile"
            subTitleComp="Hai mai sentito: il classico non lo batte nessuno?"
          />

          <FigurineContainer
            endPoint={spaceCities}
            titleComp="Cose fuori dal mondo"
            subTitleComp="Il futuro ci riserva qualcosa di sorprendente!"
          />
        </main>
      </div>
    </Layout>
  )
}
