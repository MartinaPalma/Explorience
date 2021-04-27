import styles from './index.module.scss'
import { useRef } from 'react'

import CardCity from '../cardCity'
import CardActivity from '../cardActivity'
import CarouselBtns from '../carouselBtns'
import Loader from '../loader'

const handleScroll = (direction, bindRef) => {
  return direction === 'left'
    ? (bindRef.current.scrollLeft -= 300)
    : (bindRef.current.scrollLeft += 300)
}

const FigurineList = ({ endPoint, figurines, titleComp, subTitleComp }) => {
  const scrollRef = useRef()

  return (
    <>
      <div className={styles.figurineList}>
        <div className={styles.info_city}>
          <div className={styles.texts}>
            <h3 className={styles.figurineList_title}>{titleComp}</h3>
            <h4 className={styles.figurineList_subtitle}>{subTitleComp}</h4>
          </div>
          <div className={styles.figurineList_carousel}>
            <CarouselBtns
              onHandleL={() => handleScroll('left', scrollRef)}
              onHandleR={() => handleScroll('right', scrollRef)}
            />
          </div>
        </div>

        <div
          className={`${styles.figurineList_scroll} ${
            endPoint !== 'cities' && styles.gap
          }`}
          ref={scrollRef}
        >
          {figurines.length >= 1 ? (
            figurines
              .filter((figurine) => figurine.cover_image_url)
              .map((figurine) =>
                endPoint === 'activities' ? (
                  <CardActivity data={figurine} key={figurine.uuid} />
                ) : (
                  <CardCity data={figurine} key={figurine.uuid} />
                )
              )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  )
}

export default FigurineList
