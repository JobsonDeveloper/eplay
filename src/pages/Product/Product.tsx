import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AOS from 'aos'

import Loader from '../../components/Loader/Loader'
import { useGetGameQuery } from '../../services/api'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import Gallery from '../../components/Gallery/Gallery'

import 'aos/dist/aos.css'

type GameParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as GameParams
  const { data: game } = useGetGameQuery(id)

  useEffect(() => {
    AOS.init()
  }, [])

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Bem vindo">
        <p data-aos="fade-right">{game.description}</p>
      </Section>
      <Section background="grey" title="Mais detalhes">
        <p data-aos="fade-right">
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
