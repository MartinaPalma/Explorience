import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import { images } from '../../utils/images'
import Indicator from '../Indicator'

const Slider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayTime = 8000
  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex
    setCurrentSlide(newSlideIndex)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, autoPlayTime)

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className={styles.Slider}>
      {images.map((image, index) => {
        const { url, id } = image
        return (
          <div
            key={id}
            className={styles.image}
            style={{
              backgroundImage: `url("${url}")`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></div>
        )
      })}
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <div className={styles.title}>{children}</div>
    </div>
  )
}

export default Slider
