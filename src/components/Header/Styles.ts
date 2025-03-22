import styled from 'styled-components'
import { brackpoints, colors } from '../../Styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${brackpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.grey};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  h1 {
    line-height: 0;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${brackpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${brackpoints.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${colors.white};
    /* margin-bottom: 4px; */
    margin-bottom: 8px;
  }

  @media (min-width: ${brackpoints.tablet}) {
    display: none;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${brackpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
