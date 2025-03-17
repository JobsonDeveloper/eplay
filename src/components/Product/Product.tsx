import Tag from '../Tag/Tag'
import { Card, Descricao, Infos, Titulo } from './Styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  return (
    <Card>
      <img
        src={image}
        alt={title}
        style={{ width: '222px', height: '250px' }}
      />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>

      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Product
