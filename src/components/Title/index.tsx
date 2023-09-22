// Styles
import { TitleContainer } from "./styled";

// Interface
import { ITitle } from "../../utils/interfaces";

export default function Title({title, subtitle}: ITitle) {
  return(
    <TitleContainer className="end">
      <span>{subtitle}</span>
      <h1>{title}</h1>
    </TitleContainer>
  )
}