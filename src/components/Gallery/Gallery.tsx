import { Action, Item, Items, Modal, ModalContent } from './Styles'
import Section from '../Section/Section'
import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogearts from '../../assets/images/fundohogwarts.svg'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { GalleryProps } from '../../pages/Home/Home'

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
  items: GalleryProps[]
}

interface ModalState extends GalleryProps {
  visible: boolean
}

const Gallery = ({ defaultCover, name, items }: PropsDefault) => {
  const [modal, setModal] = useState<ModalState>({
    type: 'image',
    url: '',
    visible: false
  })

  const getMediaCover = (item: GalleryProps) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryProps) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      visible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {items.map((media, idx) => (
            <Item
              key={idx}
              onClick={() => {
                setModal({
                  url: media.url,
                  visible: true,
                  type: media.type
                })
              }}
            >
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

      <Modal className={modal.visible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Close" onClick={() => closeModal()} />
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} alt="Imagem do jogo" className="imgGame" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
