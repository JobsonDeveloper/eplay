import { useDispatch } from 'react-redux'
import bannerImg from '../../assets/images/fundohogwarts.svg'
import { Game } from '../../pages/Home/Home'
import Button from '../Button/Button'
import { formataPreco } from '../ProductsList/ProductsList'
import Tag from '../Tag/Tag'
import { Banner, Infos } from './Styles'
import { add, open } from '../../store/reducers/cart'

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
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.descount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
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
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
