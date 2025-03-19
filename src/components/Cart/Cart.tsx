import Button from '../Button/Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quatity,
  Sidebar
} from './Styles'
import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag/Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList/ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((cumulator, currentValue) => {
      return (cumulator += currentValue.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.cover} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>R$ {formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>

        <Quatity>{items.length} jogo(s) no carrinho</Quatity>
        <Prices>
          Total de R$ {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique para comprar" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
