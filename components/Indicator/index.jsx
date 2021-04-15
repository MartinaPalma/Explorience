import styles from './index.module.scss'

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <div className={styles.Indicator}>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <div
            className={styles.dot}
            key={i}
            onClick={() => nextSlide(i)}
            style={{ opacity: currentSlide === i ? '1' : '0.5' }}
          />
        ))}
    </div>
  )
}

export default Indicator
