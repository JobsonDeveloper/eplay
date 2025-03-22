import styled from 'styled-components'
import { brackpoints, colors } from '../../Styles'
import { TagContainer } from '../Tag/Styles'

export const Banner = styled.div`
  display: block;
  height: 480px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  position: relative;
  padding-top: 16px;

  &::after {
    content: ' ';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${brackpoints.desktop}) {
    background-size: cover;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
