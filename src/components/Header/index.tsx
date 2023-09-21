import { useState } from "react"
import { ButtonChangeTheme, HeaderContainer, MenuHamburguer, Nav } from "./styled"
import Logo from "../Logo"
import { IHeader } from "../../utils/interfaces"

export default function Header({ toggleTheme, checked }: IHeader) {
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenu = () => setOpenMenu(false);
  
  return(
    <HeaderContainer>
      <Logo />
        <Nav className={openMenu ? 'active' : '' }>
          <MenuHamburguer onClick={() => setOpenMenu(!openMenu)} />
          <ul className="nav-list"> 
            <li><a href="#" onClick={closeMenu}>Home</a></li>
            <li><a href="#" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#" onClick={closeMenu}>Elas na Tech</a></li>
            <li><a href="#" onClick={closeMenu}>Projetos</a></li>
            <li><a href="#" onClick={closeMenu}>Depoimento</a></li>
            <li><a href="#" onClick={closeMenu}>Contato</a></li>
            <li>
              <ButtonChangeTheme>
                <label className="switch">
                  <input type="checkbox" onClick={toggleTheme} checked={checked} readOnly/>
                  <span></span>
                </label>
              </ButtonChangeTheme>
            </li>
          </ul>
      </Nav>   
    </HeaderContainer>
  )
}