import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

import ProductsList from '../../components/ProductsList/ProductsList'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: fightGames, isLoading: isLoadingRight } =
    useGetFightGamesQuery()
  const { data: rpgnGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        title="Ação"
        background="black"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        title="Esportes"
        background="grey"
        games={sportsGames}
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        title="Luta"
        background="black"
        games={fightGames}
        id="fight"
        isLoading={isLoadingRight}
      />
      <ProductsList
        title="RPG"
        background="grey"
        games={rpgnGames}
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        title="Simulação"
        background="black"
        games={simulationGames}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
