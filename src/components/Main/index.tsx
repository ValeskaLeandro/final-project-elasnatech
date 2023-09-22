// Styles
import { MainContainer } from "./styled";

// Components
import Home from "../Home";
import About from "../About";

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <About />
    </MainContainer>
  )
}