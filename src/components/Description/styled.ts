import styled from "styled-components";

export const DescriptionContainer = styled.div`  
  margin-top: 2rem;
  
  p, a {
    font-size: 1.6rem;
    text-align: justify;
  }
  a {
    text-decoration: none;
    font-weight: 600;
    color: ${props => props.theme.colors.secundaryColor};
    transition: .4s;

  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.colors.secundaryColor};
    transition: .4s;
  }

  a:hover,
  span:hover {
    color: ${props => props.theme.colors.primaryColor};
  }
  p, span, a {
    @media (max-width: 998px) {
      font-size: 1.4rem;      
    }
  }
  
`