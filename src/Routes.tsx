import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import Product from './pages/Product/Product'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}

export default Rotas
