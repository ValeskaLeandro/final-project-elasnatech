// Styles
import { Link } from "./styled";

// Interfaces
import { IButton } from "../../utils/interfaces";


export default function MainButton({text, icon: Icon, link}: IButton) {
  return(
    <Link href={link} target="_blank">{text} {Icon ? (
    <span className="icon">
      <Icon />
    </span>
    ) : (
    <span></span>
    )}</Link>
  )
}