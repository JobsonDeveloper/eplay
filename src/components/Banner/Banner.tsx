import { useGetFeaturedGameQuery } from '../../services/api'

import { parseToBrl } from '../../utils/utils'

import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import Loader from '../Loader/Loader'

import * as S from './Styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <article className="container">
        <Tag size="big">Destaque do dia</Tag>

        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>

        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique e aproveite a oferta"
        >
          Aproveitar
        </Button>
      </article>
    </S.Image>
  )
}

export default Banner
