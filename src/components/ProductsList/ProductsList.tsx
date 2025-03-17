import Game from '../../models/Game'
import Product from '../Product/Product'
import { Container, Title } from '../Section/Styles'
import { List } from './Styles'

export type Props = {
  title: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>

        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
