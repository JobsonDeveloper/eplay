import { useEffect, useState } from 'react'
import AOS from 'aos'

import Section from '../Section/Section'

import play from '../../assets/images/botao-play.png'
import zoom from '../../assets/images/mais-zoom.png'
import close from '../../assets/images/close.png'

import 'aos/dist/aos.css'
import * as S from './Styles'

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

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Section background="black" title="Galeria">
        <S.Items>
          {items.map((media, idx) => (
            <S.Item
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
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
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>

      <S.Modal className={modal.visible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Close" onClick={closeModal} />
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} alt="Imagem do jogo" className="imgGame" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
