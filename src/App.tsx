import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalCss } from './Styles'
import Rotas from './Routes'
import Footer from './components/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <article className="container">
          <Header />
        </article>

        <Rotas />

        <Footer />

        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
