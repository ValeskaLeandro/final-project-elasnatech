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

    .iframe-container {
      position: relative;
      overflow: hidden;
      max-width: 100%;
      padding-bottom: 56.25%; /* (9 / 16 * 100%) */
    }

    .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

  }
  @media (max-width: 998px) {
    align-items: center;
  }
`