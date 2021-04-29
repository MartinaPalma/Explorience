import { useState, useEffect } from 'react'
import axios from 'axios'

import FigurineList from '../figurineList'

const FigurineContainer = ({ endPoint, titleComp, subTitleComp }) => {
  const [figurines, setFigurines] = useState([])

  useEffect(() => {
    if (endPoint === 'cities' || endPoint === 'activities') {
      axios
        .get(`https://sandbox.musement.com/api/v3/${endPoint}.json?limit=14`, {
          headers: { 'Accept-Language': 'it-IT' },
        })
        .then(({ data }) => {
          switch (endPoint) {
            case 'activities':
              setFigurines(data.data)
              break
            case 'cities':
              setFigurines(data)
              break
            default:
              throw new Error('Please fill with an endPoint!')
          }
        })
    } else {
      setFigurines(endPoint)
    }
  }, [])

  return (
    <FigurineList
      figurines={figurines}
      endPoint={endPoint}
      titleComp={titleComp}
      subTitleComp={subTitleComp}
    />
  )
}

export default FigurineContainer
