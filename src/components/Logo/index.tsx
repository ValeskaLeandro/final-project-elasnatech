import { Logotype } from "./styled"
interface LogoProps {
  classe?: boolean
}
export default function Logo({classe}: LogoProps) {
  return(
    <Logotype className={classe ? 'footer' : ''}>
      <h1><span className="sinal">{"<"}</span>Valeska<span className="bar">{"/"}</span><span className="sinal">{">"}</span></h1>
    </Logotype>
  )
}

  