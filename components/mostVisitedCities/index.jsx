import CardCities from '../CardCities'
import { data } from '../data'
import styles from './index.module.scss'

const MostVisitedCities = () => {
  return (
    <section className={styles.MostVisitedCities}>
      <h3>Scopri le città più visitate</h3>
      <h4>Lasciati ispirare dalle mete più ambite</h4>
      <div className={styles.scroll}>
        {/* Scroll temporaneo */}
        {data.map((city) => {
          const { image, title, mark, id } = city
          return <CardCities image={image} title={title} mark={mark} key={id} />
        })}
      </div>
    </section>
  )
}

export default MostVisitedCities
