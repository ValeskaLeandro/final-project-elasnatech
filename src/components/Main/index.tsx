// Styles
import { MainContainer } from "./styled";

// Components
import Home from "../Home";
import About from "../About";
import Start from "../Start";

export default function Main() {
  return(
    <MainContainer>
      <Home />
      <About />
      <Start />
    </MainContainer>
  )
}