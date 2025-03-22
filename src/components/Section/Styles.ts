import styled from 'styled-components'
import { Props } from './Section'
import { colors } from '../../Styles'
import { Card } from '../Product/Styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'grey' ? colors.grey : colors.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'grey' ? colors.black : colors.grey};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
