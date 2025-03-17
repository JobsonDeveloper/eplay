import styled from 'styled-components'
import { Props } from './ProductsList'
import { cores } from '../../Styles'
import { Card } from '../Product/Styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`
