import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    display: flex;
  }

  ::-webkit-scrollbar {
  width: 6px;
}

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    background-color: ${ props => props.theme.colors.gray2 }
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${ props => props.theme.colors.yellow };
    border-radius: 10px;
  }
`
export default GlobalStyle;