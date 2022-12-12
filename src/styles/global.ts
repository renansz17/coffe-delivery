import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
    padding: 0 10rem;
  }
  body, input, textarea, button {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    font-size: 1rem
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

`
