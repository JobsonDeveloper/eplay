import bannerImg from '../../assets/images/fundohogwarts.svg'
import Button from '../Button/Button'
import Tag from '../Tag/Tag'
import { Banner, Infos } from './Styles'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>

        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            Por R$ 190,00
          </p>

          <Button type="button" title="Clique para adicionar" variant="primary">
            Adicionar ao carinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
