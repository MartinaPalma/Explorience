import styles from './index.module.scss'
import ArrowBtn from '../arrowBtn'

const CarouselBtns = ({ onHandleL, onHandleR }) => {
  return (
    <div className={styles.carouselBtns}>
      <div className={styles.pair}>
        <ArrowBtn text="<" onHandle={onHandleL} />
        <ArrowBtn text=">" onHandle={onHandleR} />
      </div>
    </div>
  )
}

export default CarouselBtns
