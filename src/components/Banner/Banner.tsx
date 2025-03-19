import { Imagem, Precos, Titulo } from './Styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home/Home'
import { formataPreco } from '../ProductsList/ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <p>Carregando...</p>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <article className="container">
        <Tag size="big">Destaque do dia</Tag>

        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>

        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique e aproveite a oferta"
        >
          Aproveitar
        </Button>
      </article>
    </Imagem>
  )
}

export default Banner
