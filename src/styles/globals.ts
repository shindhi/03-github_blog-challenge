import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiazed;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.blue};
  }

  body {
    background: ${({ theme }) => theme['base-background']}; 
    color: ${({ theme }) => theme['base-text']};
  }
  
  *, body, input, textarea, button {
    font: 400 1.6rem Nunito, sans-serif;
    line-height: 160%;
  }
`
