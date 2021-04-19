import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Component {...pageProps} />
    </div>
  )
}

export default App
