// Styles
import { ContactSection } from "./styled";

// Components
import Title from "../../components/Title";

// Utilities
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";


export default function Contact() {
  return(
    <ContactSection id="contact" className="container">
      <Title title="Fale comigo" subtitle="<Contact/>" classname="start" />
      <div className="contacts">
        <a href="mailto:valeskaleandrodev@gmail.com"><AiOutlineMail /> valeskaleandrodev@gmail.com</a>
        <a href="https://www.linkedin.com/in/valeskaleandro/" target="_blank">
          <AiFillLinkedin /> /in/valeskaleandro
        </a>
        <a href="https://github.com/ValeskaLeandro" target="_blank">
          <AiFillGithub /> /valeskaleandro
        </a>
      </div>

    </ContactSection>
  )
}