// Styles
import { TestimonySection } from "./styled";

// Components
import Title from "../../components/Title";
import Description from "../../components/Description";

export default function Testimony() {
  return(
    <TestimonySection id="testimony" className="container">
      <Title title="Depoimento" subtitle="<ElasNaTech/>" classname="start"/>
      <div className="contentTestimony">
        <Description>
          <p>
            <span>O programa é ótimo!</span> Principalmente para quem está buscando um <span>primeiro</span> contato com o universo de <span>desenvolvimento web</span>. Ter a acesso a uma gama de <span>cursos</span> tão grande de forma <span>GRATUITA</span> cria muitas possibilidades para que <span>mulheres</span> que talvez não pudessem ter acesso a esse tipo de conteúdo possa de especializar e conhecer um mundo <span>novo</span> e <span>incrível</span>, como é o mundo da <span>tecnologia</span>. Quando eu comecei o projeto, já tinha um pouco conhecimento em <span>desenvolvimento web</span>. Sendo assim, eu dediquei todo meu tempo livre para fazer cursos extras que estavam disponíveis na prataforma da <span>Udemy</span>, que, com certeza, em qualquer outro momento seria bem <span>difícil</span>. Adquiri <span>muito conhecimento</span>, conheci <span>muitas pessoas</span>, com o pouco que sabia tentei ajudar quem precisava. E isso é muito gradificante. <span>TODAS</span> em direção ao mesmo objetivo. 🚀
          </p>
        </Description>
      </div>
    </TestimonySection>
  )
}