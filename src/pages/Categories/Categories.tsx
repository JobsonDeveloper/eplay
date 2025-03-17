import ProductsList from '../../components/ProductsList/ProductsList'
import Game from '../../models/Game'

const games: Game[] = [
  {
    id: 1,
    title: 'Resident Evil',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6HOVAXXuCYYeKTd4pMfUnvWlxfvrIrs0w&s',
    category: 'Ação',
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae quis! Ad facere ullam minus sunt quam illo quaerat fuga ducimus alias tempora magnam molestiae fugiat, debitis vel voluptates animi!'
  },
  {
    id: 2,
    title: 'Resident Evil',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6HOVAXXuCYYeKTd4pMfUnvWlxfvrIrs0w&s',
    category: 'Ação',
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae quis! Ad facere ullam minus sunt quam illo quaerat fuga ducimus alias tempora magnam molestiae fugiat, debitis vel voluptates animi!'
  },
  {
    id: 3,
    title: 'Resident Evil',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6HOVAXXuCYYeKTd4pMfUnvWlxfvrIrs0w&s',
    category: 'Ação',
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae quis! Ad facere ullam minus sunt quam illo quaerat fuga ducimus alias tempora magnam molestiae fugiat, debitis vel voluptates animi!'
  },
  {
    id: 4,
    title: 'Resident Evil',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0R6HOVAXXuCYYeKTd4pMfUnvWlxfvrIrs0w&s',
    category: 'Ação',
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, beatae quis! Ad facere ullam minus sunt quam illo quaerat fuga ducimus alias tempora magnam molestiae fugiat, debitis vel voluptates animi!'
  }
]

const Categories = () => {
  return (
    <>
      <ProductsList title="RPG" background="grey" games={games} />
      <ProductsList title="Ação" background="black" games={games} />
      <ProductsList title="Aventura" background="grey" games={games} />
      <ProductsList title="FPS" background="black" games={games} />
    </>
  )
}

export default Categories
