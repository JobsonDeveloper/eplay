import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
import Banner from '../../components/Banner/Banner'
import ProductsList from '../../components/ProductsList/ProductsList'

const Home = () => {
  const { data: onSaleGamer, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        background="grey"
        games={onSaleGamer}
        id="on-sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        title="Em Breve"
        background="black"
        games={soonGames}
        id="cooming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
