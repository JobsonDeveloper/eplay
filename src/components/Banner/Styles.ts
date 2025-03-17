import styled from 'styled-components'
import { TagContainer } from '../Tag/Styles'

export const Imagem = styled.section`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  font-weight: bold;
  background-size: cover;

  .container {
    display: flex;
    position: relative;
    padding-top: 340px;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
