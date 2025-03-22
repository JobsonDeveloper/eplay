import styled from 'styled-components'
import { brackpoints } from '../../Styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${brackpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${brackpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
