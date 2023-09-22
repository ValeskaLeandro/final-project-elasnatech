import styled from "styled-components";

export const TestimonySection = styled.section`
  align-items: end;

  .contentTestimony {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 998px) {
      max-width: 100%;
    }
  }
  @media (max-width: 998px) {
    align-items: center;
  }
`