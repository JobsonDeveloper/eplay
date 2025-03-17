import { Imagem, Precos, Titulo } from './Styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <article className="container">
        <Tag size="big">Destaque do dia</Tag>

        <div>
          <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
          <Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 99,90
          </Precos>
        </div>

        <Button type="link" to="/produtos" title="Clique e aproveite a oferta">
          Aproveitar
        </Button>
      </article>
    </Imagem>
  )
}

export default Banner
