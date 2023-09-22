import { useState } from "react"
import { ButtonChangeTheme, Dropdown, HeaderContainer, MenuHamburguer, Nav } from "./styled"
import Logo from "../../components/Logo"
import { IHeader } from "../../utils/interfaces"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Header({ toggleTheme, checked }: IHeader) {
  const [openMenu, setOpenMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleMenu = () => {
    if (openDropdown) {
      setOpenDropdown(false);
    }
    setOpenMenu(!openMenu);
  };
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
    if (openMenu) {
      setOpenMenu(false);
    }
  };
  
  return(
    <HeaderContainer>
      <Logo />
        <Nav className={openMenu ? 'active' : '' }>
          <MenuHamburguer onClick={toggleMenu} />
          <ul className="nav-list"> 
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>Sobre mim</a></li>
            <li className="dropdown">
              <Dropdown onClick={() => setOpenDropdown(!openDropdown)}>
                Elas na Tech
              {openDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </Dropdown>
              {openDropdown ? (
                <ul className="menu-dropdown">
                  <li>
                    <a href="#start" onClick={toggleDropdown}>Início</a>
                  </li>
                  <li >
                    <a href="#learn" onClick={toggleDropdown}>Aprendizado</a>
                  </li>
                  <li >
                    <a href="#testimony" onClick={toggleDropdown}>Depoimento</a>
                  </li>
                </ul>
              ) : null}         
            </li>
            <li><a href="#projects" onClick={toggleMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
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