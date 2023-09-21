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

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 10px; 
    
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primaryColor};  
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secundaryColor}; 
  }
`