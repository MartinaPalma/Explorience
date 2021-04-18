import { useState, useEffect } from 'react'
import axios from 'axios'

import FigurineList from '../figurineList'

const FigurineContainer = ({ endPoint }) => {
  const [figurines, setFigurines] = useState([])

  useEffect(() => {
    axios
      .get(`https://sandbox.musement.com/api/v3/${endPoint}.json`)
      .then(({ data }) => setFigurines(data.data))
  }, [])

  return <FigurineList figurines={figurines} />
}

export default FigurineContainer
