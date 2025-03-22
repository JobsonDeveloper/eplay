import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos'

import Button from '../Button/Button'
import { RootReducer } from '../../store/store'
import { close, remove } from '../../store/reducers/cart'
import Tag from '../Tag/Tag'

import 'aos/dist/aos.css'
import * as S from './Styles'
import { getTotalPrice, parseToBrl } from '../../utils/utils'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />

      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id} data-aos="fade-left">
                  <img src={item.media.cover} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>R$ {parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>

            <S.Quatity>{items.length} jogo(s) no carrinho</S.Quatity>
            <S.Prices>
              Total de R$ {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique para comprar"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione um produto.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
