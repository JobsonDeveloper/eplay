import { Link } from 'react-router-dom'
import { HeaderBar, LinkChart, LinkItem, Links } from './Styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo EPLAY" />
        </Link>

        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/">Novidades</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/">Promoções</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>

      <LinkChart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkChart>
    </HeaderBar>
  )
}

export default Header
