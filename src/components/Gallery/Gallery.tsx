import { Action, Item, Items, Modal, ModalContent } from './Styles'
import Section from '../Section/Section'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'

import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogearts from '../../assets/images/fundohogwarts.svg'
import close from '../../assets/images/close.png'

type GalleryProps = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryProps[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogearts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=Db26FlijNgv39TT9'
  }
]

type PropsDefault = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: PropsDefault) => {
  const getMediaCover = (item: GalleryProps) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryProps) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {mock.map((media, idx) => (
            <Item key={idx}>
              <img
                src={getMediaCover(media)}
                alt={`Imagem ${idx} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="" />
          </header>

          <img src={spiderman} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
