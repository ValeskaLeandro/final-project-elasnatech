// Styles
import { LearnSection } from "./styled";

// Components
import Title from "../../components/Title";

export default function Learn() {
  return(
    <LearnSection id="learn" className="container">
      <Title title="Aprendizado" subtitle="<ElasNaTech/>" classname="end"/>
      <div className="contentLearn">
        <p>Esses foram alguns tópicos que aprendi durante o programa:</p>
        <ul>
          <li>Animações com CSS</li>
          <li>SEO</li>
          <li>Bootstrap</li>
          <li>Automações AWS com Python</li>
          <li>Python + ChatGPT para além de textos.</li>
        </ul>
        <p>Aprendizado com cursos extras na plataforma:</p>
        <ul>
          <li>Fundamentos básico e intermediários de React</li>
          <li>Typescript</li>
          <li>NextJS</li>
          <li>Styled-Components</li>
          <li>NodeJS</li>
        </ul>
      </div>

    </LearnSection>
  )
}