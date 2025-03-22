import { useEffect } from 'react'
import Tag from '../Tag/Tag'
import AOS from 'aos'

import 'aos/dist/aos.css'
import * as S from './Styles'

type Props = {
  id: number
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
      data-aos="flip-left"
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>

      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
