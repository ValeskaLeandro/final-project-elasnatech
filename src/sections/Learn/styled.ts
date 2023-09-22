import styled from "styled-components";

export const LearnSection = styled.section`
  align-items: end;

  .contentLearn {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      color: ${props => props.theme.colors.title};
    }
    p, ul li {
      font-size: 1.6rem;
      @media (max-width: 998px) {
      font-size: 1.4rem;
        
      }
    }

    ul li::marker {
      color: ${props => props.theme.colors.secundaryColor};

    }
  }
  @media (max-width: 998px) {
      align-items: center;
    }
`