import styled from 'styled-components'
import { cores } from '../../Styles'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;

  & > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
    cursor: pointer;
  }

  iframe,
  .imgGame {
    width: 100%;
    height: 480px;
  }
`
