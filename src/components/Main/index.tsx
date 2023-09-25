// Styles
import { MainContainer } from "./styled";

// Sections
import Home from "../../sections/Home";
import About from "../../sections/About";
import Start from "../../sections/Start";
import Learn from "../../sections/Learn";
import Contact from "../../sections/Contact";
import Testimony from "../../sections/Testimony";
import Projects from "../../sections/Projects";

// Data
import { projects } from "../../data/data"

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <About />
      <Start />
      <Learn />
      <Testimony />
      <Projects projects={projects}/>
      <Contact />
    </MainContainer>
  )
}