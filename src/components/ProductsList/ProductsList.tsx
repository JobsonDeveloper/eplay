import { parseToBrl } from '../../utils/utils'
import Product from '../Product/Product'

import * as S from '../Section/Styles'
import { List } from './Styles'
import Loader from '../Loader/Loader'

export type Props = {
  id: string
  title: string
  background: 'grey' | 'black'
  games?: Game[]
  isLoading: boolean
}

const ProductsList = ({ id, title, background, games, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.descount) {
      tags.push(`${game.prices.descount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>

        <List>
          {games?.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </S.Container>
  )
}

export default ProductsList
