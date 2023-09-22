// Styles
import { MainContainer } from "./styled";

// Sections
import Home from "../../sections/Home";
import About from "../../sections/About";
import Start from "../../sections/Start";
import Learn from "../../sections/Learn";

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <About />
      <Start />
      <Learn />
    </MainContainer>
  )
}