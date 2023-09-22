// Styles
import { StartSection } from "./styled";

// Components
import Title from "../../components/Title";
import Description from "../../components/Description";

export default function Start() {
  return(
    <StartSection id="start">
      <Title title="Início" subtitle="<ElasNaTech/>" classname="start"/>
      <div className="content">
        <div className="image">
          <a href="https://jabrasil.org.br/elasnatech23/">
            <img src="./logo-elas-na-tech.svg" alt="Logo Elas na tech" />
          </a>
        </div>
        <div className="description">
          <Description>
            <p>
              Comecei minha trajetória acadêmica na área da saúde e em <span>2020</span> comecei a estudar programação e iniciei minha <span>segunda gradução</span>. Em 2022 resolvi que tentaria fazer minha <span>transição de carreira</span> e migrar de vez para a tecnologia. Fui <span>estagiária</span> por 10 meses em uma empresa de <span>educação</span> e pude aprender muito sobre desenvolvimento de software. Foi aqui que um <span>amigo</span> me falou de um projeto que parecia legal, mas que era só para <span>mulheres</span>, que ele não poderia participar, mas que poderia ser ótimo para mim. Me enviou o link de inscrição, que vale ressaltar que faltavam só  <span>2 dias</span> para encerrar as inscrições. E foi assim que eu conheci e pude participar do <a href="https://jabrasil.org.br/elasnatech23/">#ElasNaTech</a>.
            </p>
          </Description>
        </div>
      </div>
    </StartSection>
  )
}