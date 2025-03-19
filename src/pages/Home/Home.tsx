import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryProps {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    descount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryProps[]
  }
}

const Home = () => {
  const { data: onSaleGamer } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGamer && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          title="Promoções"
          background="grey"
          games={onSaleGamer}
          id="on-sale"
        />
        <ProductsList
          title="Em Breve"
          background="black"
          games={soonGames}
          id="cooming-soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
