// Styles
import { HomeSection } from "./styled"

// Utilities
import Typewriter from 'typewriter-effect';
import { TfiAngleDoubleDown } from "react-icons/tfi";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsFillChatHeartFill } from "react-icons/bs";
import { PiArrowRightBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

// Components
import MainButton from "../MainButton";

const Home = () => {
  return(
    <HomeSection id="home">
      <div className="content">
        <div className="left">
          <span>Olá, eu sou</span>
          <h1>Valeska Leandro <span>.</span></h1>
          <Typewriter
            options={{
              strings: [
              'Desenvolvedora Front-end', 
              'Front-end Developer',
              'Desenvolvedora ReactJS'
            ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>Uma profissional focada em trazer o que sua empresa precisa.</p>
          <div className="infos">
            <span className="location">
              <FaLocationDot /> Fortaleza-CE
            </span>
            <span className="availability">
              <BsFillChatHeartFill /> Elas na Tech!
            </span>
          </div>
          <div className="button">
            <MainButton text="Conheça meu portfólio" icon={PiArrowRightBold}/>
          </div>
        </div>
        <div className="rigth">
          <img src="/image-main.svg" alt="Valeska Leandro - Desenvolvedora Front-end" />
          <div className="socialMedia">
            <a href="https://www.linkedin.com/in/valeskaleandro/"><AiFillLinkedin /></a>
            <a href="https://github.com/ValeskaLeandro"><AiOutlineGithub /></a>
            <a href="https://www.instagram.com/valeskaleandro/"><AiOutlineInstagram /></a>
          </div>
        </div>
      </div>
      <TfiAngleDoubleDown className="arrow"/>
    </HomeSection>
  )
}

export default Home