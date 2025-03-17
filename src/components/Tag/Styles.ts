import styled from 'styled-components'
import { cores } from '../../Styles'
import { Props } from './Tag'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'big' ? '16pz' : '10px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  font-weight: bold;
  border-radius: 8px;
  display: inline-block;
`
