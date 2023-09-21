// Styles
import { FooterContainer, SocialMedia } from "./styled";

// Utilities
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";


// Components
import Logo from "../Logo";

export default function Footer() {
  return(
    <FooterContainer>
      <div className="content">
        <div className="logo">
          <Logo footer/>
          <p>Desenvolvedora Front-end</p>
          <SocialMedia>            
            <a href="https://www.linkedin.com/in/valeskaleandro/"><AiFillLinkedin /></a>
            <a href="https://github.com/ValeskaLeandro"><AiOutlineGithub /></a>
            <a href="https://www.instagram.com/valeskaleandro/"><AiOutlineInstagram /></a>
          </SocialMedia>
        </div>
        <div className="copy">
          <p>Copyright © 2023 <a href="">Valeska Leandro</a>. Todos os direitos reservados.</p>
        </div>
      </div>
    </FooterContainer>
  )
}