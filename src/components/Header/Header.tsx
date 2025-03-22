import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store/store'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

import * as S from './Styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="Logo EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Em breve
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </Link>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cart} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>

      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <Link
            title="Clique aqui para acessar a página de categorias"
            to="/categories"
          >
            Categorias
          </Link>
          <Link
            title="Clique aqui para acessar a seção de em breve"
            to="/#coming-soon"
          >
            Em breve
          </Link>
          <Link
            title="Clique aqui para acessar a seção de promoções"
            to="/#on-sale"
          >
            Promoções
          </Link>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
