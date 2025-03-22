import { useDispatch } from 'react-redux'

import { parseToBrl } from '../../utils/utils'
import { add, open } from '../../store/reducers/cart'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'

import * as S from './Styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.descount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>

          {game.prices.current && (
            <Button
              type="button"
              title="Clique para adicionar"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
