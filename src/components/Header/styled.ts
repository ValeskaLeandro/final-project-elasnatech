import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 80%;
  max-width: 1500px;
  height: 8rem;
  background-color: ${props => props.theme.colors.primaryBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  padding: 3rem;

`

export const ButtonChangeTheme = styled.div`
  padding-top: .5rem;

  .switch {
    display: flex;
    align-items: center; 
    margin-bottom: 1rem;
    gap: .3rem;
  }

  .switch input[type="checkbox"] {
    width: .01rem;
    height: .01rem;
    position: absolute;
    left: 50%;
    outline: none;
  }

  .switch input[type="checkbox"]+span {
    display: inline-block;
    width: 3.2rem;
    height: 1.7rem;
    border: .1rem solid ${props => props.theme.colors.primaryColor};
    border-radius: 1rem;
  }
  
  .switch input[type="checkbox"]+span::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primaryColor};
    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .switch input[type="checkbox"]:checked+span::after{
    transform: translateX(100%);
    background-color: ${props => props.theme.colors.secundaryColor};
    
  }

  .switch input[type="checkbox"]:checked+span {
    background-color: ${props => props.theme.colors.secundaryBackground};
  }
    
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-list {
    display: flex;
    gap: 2rem;
    list-style: none;

    & li:not(:last-child){
      overflow: hidden;
      position: relative;
      
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 100%;
        width: 100%;
        height: 3px;
        background-color: ${props => props.theme.colors.primaryColor};
        transition: .5s;
      }

      &:hover::before {
        right: 0;
      }
    }
  }

  .nav-list a {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.title};
    font-weight: 500;
    padding-block: 1rem;
    text-decoration: none;
    transition: .4s;

    &:hover {
      color: ${props => props.theme.colors.secundaryColor};
    }    
  }

  @media (max-width: 998px) {
    .nav-list {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: ${props => props.theme.colors.secundaryBackground};
      clip-path: circle(50px at 90% -20%);
      transition: 1s ease-out;
      z-index: 1;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 0;
      pointer-events: none;
    }

    &.active .nav-list {
      clip-path: circle(1500px);
      pointer-events: all;
    }

    &.active .nav-list a {
      color: ${props => props.theme.colors.text};
    }

    &.active button {
      border-top-color: transparent;
    }

    &.active button::before {
      transform: rotate(135deg);
    }

    &.active button::after {
      transform: rotate(-135deg);
      top: -7px;
    }
  }
`
export const MenuHamburguer = styled.button`
  display: none;
  border: none;
  background: none;
  border-top: 2px solid ${props => props.theme.colors.secundaryColor};
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 25px;
    height: 2px;
    margin-top: 5px;
    background-color: ${props => props.theme.colors.secundaryColor};
    position: relative;
    transition: .5s;
  }

  @media (max-width: 998px) {
    display: block;
    z-index: 2;
  }
`