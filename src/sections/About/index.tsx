// Styles
import { AboutSection } from "./styled";

// Components
import Title from "../../components/Title";

// Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdCake, MdPets } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import Description from "../../components/Description";
 
export default function About() {
  return(
    <AboutSection id="about" className="container">
      <Title title="Sobre mim" subtitle="<About/>" classname="end"/>
      <div className="content">
        <div className="image">
          <img src="./about-image.jpg" alt="Valeska Leandro." />
        </div>
        <div className="infos-about">
          <p className="items-info"><span><MdCake /></span> 27 anos</p>
          <p className="items-info"><span><FaLocationDot/></span> Fortaleza-CE</p>
          <p className="items-info"><span><MdPets/></span> Mãe de pet</p>
          <p className="items-info"><span><HiAcademicCap /></span> Bacharel em Educação Física</p>
          <p className="items-info"><span><HiAcademicCap /></span> Técnologo em Análise e Des. de Sistemas</p>
          <Description>
              <p>
                Sou apaixonada por <span>tecnologia</span> desde sempre, sim, inclusive montar <span>computadores</span> já foi um ótimo passatempo para mim. Sou mãe de pet e <span>apaixonada</span> por cachorro. Amo esportes, principalmente <span>vôlei</span> e já o pratiquei por alguns bons anos. Adoro <span>vídeo game</span>, então se quiser passar um tempo em algum jogo online é só chamar. Adoro ver <span>série</span> ou <span>filmes</span> no meu tempo livre, melhor ainda se for <span>comédia</span> ou <span>terror</span>. Sempre que vou <span>codar</span> coloco uma música ou algum podcast ou vídeo de <span>true crime</span>. Não me julgue, eu sem que você também gosta. 
              </p>          
          </Description>
        </div>
      </div>
    </AboutSection>
  )
}