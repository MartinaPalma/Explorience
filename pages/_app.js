import { useReducer } from 'react'
import reducer from '../context/reducer'
import store from '../context/store'
import Context from '../context/index'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, store)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </Context.Provider>
  )
}

export default App
