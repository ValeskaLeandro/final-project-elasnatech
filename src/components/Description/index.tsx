// Styles
import { DescriptionContainer } from "./styled";

// Interfaces
import { IDescription } from "../../utils/interfaces";

export default function Description({children}: IDescription) {
  return(
    <DescriptionContainer>
      {children}
    </DescriptionContainer>
  )
}