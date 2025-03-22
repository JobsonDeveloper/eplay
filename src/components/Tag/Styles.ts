import styled from 'styled-components'

import { Props } from './Tag'

import { colors } from '../../Styles'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16pz' : '10px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  font-weight: bold;
  border-radius: 8px;
  display: inline-block;
`
