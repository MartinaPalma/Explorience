import styles from './index.module.scss'
import Figurine from '../figurine'

const FigurineList = ({ figurines }) => {
  return (
    <div className={styles.figurineList}>
      {figurines.map((figurine) => (
        <Figurine data={figurine} key={figurine.uuid} />
      ))}
    </div>
  )
}

export default FigurineList
