import styled from "styled-components";

export const AboutSection = styled.section`
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
      border-radius: 15px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .infos-about {
      .items-info {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        gap: .5rem;
      }

      .items-info span {
        svg {
          font-size: 2.5rem;
          fill: ${props => props.theme.colors.secundaryColor}
        }
      } 
    }

    @media (max-width: 998px) {
      flex-direction: column;

      .infos-about .items-info {
        font-size: 1.2rem;
        & span svg {
          font-size: 1.8rem;
        }
      }
    }
  }
`
