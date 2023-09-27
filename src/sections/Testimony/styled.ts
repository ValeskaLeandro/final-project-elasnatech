import styled from "styled-components";

export const TestimonySection = styled.section`
  align-items: end;

  .contentTestimony {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    
    .iframe-container {
      position: relative;
      overflow: hidden;
      max-width: 100%;
      margin-top: 2rem;
      padding-bottom: 56.25%; /* (9 / 16 * 100%) */
    }

    .iframe-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 998px) {
      max-width: 100%;
    }
  }
  @media (max-width: 998px) {
    align-items: center;
  }
`