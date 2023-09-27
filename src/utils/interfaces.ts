import { IconType } from "react-icons"

export interface IHeader {
  toggleTheme(): void,
  checked: boolean
}


export interface ILogo {
  footer?: boolean
}

export interface ITitle {
  title: string,
  subtitle: string,
  classname: string
}

export interface IButton {
  text: string,
  icon?: React.ElementType,
  link: string
}

export interface IDescription {
  children: React.ReactNode
}

export interface ICard {
  id: number,
  name: string,
  description: string,
  code: string,
  deploy: string,
  tecnologys: IconType[],
  img: string
}

export interface IProjects {
  projects: ICard[]
}