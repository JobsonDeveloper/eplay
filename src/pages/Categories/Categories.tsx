import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import { Game } from '../Home/Home'
import {
  useGetActionGamesQuery,
  useGetEsportsGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: esportsGames } = useGetEsportsGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgnGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    actionGames &&
    esportsGames &&
    fightGames &&
    rpgnGames &&
    simulationGames
  ) {
    return (
      <>
        <ProductsList
          title="Ação"
          background="black"
          games={actionGames}
          id="action"
        />
        <ProductsList
          title="Esportes"
          background="grey"
          games={esportsGames}
          id="sports"
        />
        <ProductsList
          title="Luta"
          background="black"
          games={fightGames}
          id="fight"
        />
        <ProductsList
          title="RPG"
          background="grey"
          games={rpgnGames}
          id="rpg"
        />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
