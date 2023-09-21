import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${props => props.theme.colors.primaryBackground};
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`