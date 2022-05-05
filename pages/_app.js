import Tina from '../.tina/components/TinaDynamicProvider.js'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <Tina>
      <Component {...pageProps} />
    </Tina>
  )
}

export default App
