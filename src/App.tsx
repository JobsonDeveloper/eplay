import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalCss } from './Styles'
import Rotas from './Routes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <article className="container">
        <Header />
      </article>

      <Rotas />

      <Footer />
    </BrowserRouter>
  )
}

export default App
