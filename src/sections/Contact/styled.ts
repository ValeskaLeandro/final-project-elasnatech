import styled from "styled-components";

export const ContactSection = styled.section`
  align-items: center;
  
  .contacts {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      font-size: 2rem;
      display: flex;
      gap: .5rem;
      align-items: center;
      color: ${props => props.theme.colors.text};
      text-decoration: none;
      transition: .4s;

      @media (max-width: 998px) {
        font-size: 1.2rem;  
      }

      svg {
        font-size: 3rem;
        color: ${props => props.theme.colors.secundaryColor};
        @media (max-width: 998px) {
          font-size: 2rem; 
        }
      }

      &:hover {
        transform: scale(1.1);
        color: ${props => props.theme.colors.primaryColor};
      }
    }
  }
`