import styled from "styled-components";

export const TitleContainer = styled.div`
  width:  100%;
  display: flex;
  align-items: end;
  margin-bottom: 3rem;
  span {
    font-size: 7rem;
    font-weight: 800;
    color: ${props => props.theme.colors.secundaryBackground};
    position: relative;

  }
  h1 {
    font-size: 3.2rem;
    color: ${props => props.theme.colors.secundaryColor};
    font-weight: 600;
    position: absolute;
  }

  &.end {
    justify-content: end;
  }

  &.start {
    justify-content: start;
  }
`
