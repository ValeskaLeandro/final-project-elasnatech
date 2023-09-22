import styled from "styled-components";

export const StartSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  width: 100%;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    .image {
      max-width: 400px;
      img {
        width: 100%;
      }
    }

    .description {
      max-width: 600px;
    }

    @media (max-width: 998px) {
      flex-direction: column;

      .description {
        max-width: 100%;        
      }
    }
 }
`