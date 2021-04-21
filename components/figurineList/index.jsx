import styles from './index.module.scss'
import Figurine from '../figurine'

import Loader from '../loader'

const FigurineList = ({ endPoint, figurines, titleComp, subTitleComp }) => {
  return (
    <>
      <div className={styles.figurineList}>
        <h3 className={styles.figurineList_title}>{titleComp}</h3>
        <h4 className={styles.figurineList_subtitle}>{subTitleComp}</h4>

        <div className={styles.scroll}>
          {figurines.length >= 1 ? (
            figurines.map((figurine) => (
              <Figurine
                endPoint={endPoint}
                data={figurine}
                key={figurine.uuid}
              />
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
