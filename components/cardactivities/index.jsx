import CardActivity from '../cardactivity'
import styles from './index.module.scss'
import { data } from '../data'

const CardActivities = () => {
  return (
    <section className={styles.CardActivities}>
      <h3>Scopri le attività più ricercate</h3>
      <h4>Lasciati trasportare dalle attività più ambite</h4>
      <div className={styles.scroll}>
        {data.map((activity) => {
          const { image, title, mark, id } = activity
          return (
            <CardActivity image={image} title={title} mark={mark} key={id} />
          )
        })}
      </div>
    </section>
  )
}

export default CardActivities

//https://sandbox.musement.com/api/v3/activities
