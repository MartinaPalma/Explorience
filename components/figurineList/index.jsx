import styles from './index.module.scss'
import { useRef } from 'react'

import CardCity from '../cardCity'
import CarouselBtns from '../carouselBtns'
import Loader from '../loader'

const handleScroll = (direction, bindRef) => {
  return direction === 'left'
    ? (bindRef.current.scrollLeft -= 300)
    : (bindRef.current.scrollLeft += 300)
}

const FigurineList = ({ figurines, titleComp, subTitleComp }) => {
  const scrollRef = useRef()

  return (
    <>
      <div className={styles.figurineList}>
        <div className={styles.info}>
          <div className={styles.texts}>
            <h3 className={styles.figurineList_title}>{titleComp}</h3>
            <h4 className={styles.figurineList_subtitle}>{subTitleComp}</h4>
          </div>
          <div className={styles.carousel}>
            <CarouselBtns
              onHandleL={() => handleScroll('left', scrollRef)}
              onHandleR={() => handleScroll('right', scrollRef)}
            />
          </div>
        </div>

        <div className={styles.scroll} ref={scrollRef}>
          {figurines.length >= 1 ? (
            figurines.map((figurine) => (
              <CardCity data={figurine} key={figurine.uuid} />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  )
}

export default FigurineList
