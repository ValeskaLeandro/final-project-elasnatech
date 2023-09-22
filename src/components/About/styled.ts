import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

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
  }
`

export const Description = styled.div`  
  margin-top: 2rem;
  
  p {
    font-size: 1.6rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.colors.secundaryColor};
    transition: .4s;

    &:hover {
      color: ${props => props.theme.colors.primaryColor};

    }
  }
`