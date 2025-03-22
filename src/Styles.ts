import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#eee',
  black: '#111',
  grey: '#333',
  lightGrey: '#A3A3A3',
  green: '#10AC84'
}

export const brackpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;

    @media (max-width: ${brackpoints.desktop}) {
      max-width: 80%;
    }
  }
`
