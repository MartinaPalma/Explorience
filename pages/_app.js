import '../styles/globals.css'

import Layout from '../components/layout'

function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
