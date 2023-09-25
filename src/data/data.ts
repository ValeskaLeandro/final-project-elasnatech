import { SiStyledcomponents } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiCssmodules, SiTailwindcss, SiTypescript, 
        SiReact, SiJavascript, SiCss3 } from "react-icons/si";

export const projects = [
  {
    id: 100,
    name: "puppies.com",
    description: "Este projeto é uma web page de um petshop. A página conta com apresentação dos serviços e dos produdtos em promoção. Além de um formulário para contato. Totalmente responsivo.",
    code: "https://github.com/ValeskaLeandro/puppies-petshop",
    deploy: "https://valeskaleandro.github.io/puppies-petshop/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/puppies.com.png"
  },
  {
    id: 101,
    name: "Easybank",
    description: "Este projeto é uma web page de um banco online. A página conta com apresentação dos serviços e útltimos artigos. Totalmente responsivo.",
    code: "https://github.com/ValeskaLeandro/easybank-landing-page",
    deploy: "https://valeskaleandro.github.io/easybank-landing-page/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/easybank.png"
  },
  {
    id: 102,
    name: "The Bakery",
    description: "Este projeto é uma landing page de uma padaria, desenvolvida como atividade do curso #ElasNaTech. Aproveitei a oportunidade para aperfeiçoar meus conhecimento em React. A página conta com apresentação dos serviços, dos principais produdtos e do time do estabelecimento. Além de um formulário para contato.",
    code: "https://github.com/ValeskaLeandro/the-bakery-landing-page",
    deploy: "https://valeskaleandro.github.io/the-bakery-landing-page/",
    tecnologys: [SiReact, TbBrandVite, SiCssmodules, SiJavascript],
    img: "./projects/thebakery.png"
  },
  {
    id: 104,
    name: "Calculator",
    description: "Uma calculadora totalmente funcional, desenvolvida afim de aprimorar os conhecimentos em JavaScript. Essa conta com várias possíveis operações além de um botão para alternar entre dark mode/light mode. Aqui usei o método eval() do próprio JavaScript, que para esse caso foi uma solução bem simples e funcional.",
    code: "https://github.com/ValeskaLeandro/calculator-elasnatech",
    deploy: "https://valeskaleandro.github.io/calculator-elasnatech/",
    tecnologys: [SiReact, TbBrandVite, SiCss3, SiJavascript],
    img: "./projects/calculator.png"
  },
  {
    id: 105,
    name: "Validation Number",
    description: "Projeto de validação de número desenvolvido com o objetivo de verificar se o número digitado aderi a umas série de critérios pré-definidos com objetivo de aprimorar conhecimentos em JavaScript.",
    code: "https://github.com/ValeskaLeandro/validation-number-elasnatech",
    deploy: "https://valeskaleandro.github.io/validation-number-elasnatech/",
    tecnologys: [SiReact, TbBrandVite, SiTailwindcss, SiTypescript],
    img: "./projects/validation-number.png"
  },
  {
    id: 106,
    name: "The movies",
    description: "Este projeto é uma web page com a apresentação e descrição de vários filmes. Para os dados foram feitas requisições a TMDB API. A página conta com responsidade, mecanismo de busca por nome, páginas de melhores filme, filme populares, recentes, em cartaz, página de detalhe dos filmes e filmes separados por gênero.",
    code: "https://github.com/ValeskaLeandro/themovies-tmdb",
    deploy: "https://themoviesvls.vercel.app/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiJavascript],
    img: "./projects/themovie.png"
  },
  {
    id: 107,
    name: "Portfólio - ElasNaTech",
    description: "Este projeto foi desenvolvido com projeto final para o programa Elas na Tech afim de demostrar meus conhecimentos em desenvolvimento web fron-end.",
    code: "https://github.com/ValeskaLeandro/final-project-elasnatech",
    deploy: "https://valeskaleandro.github.io/final-project-elasnatech/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/portfolio1.png"
  },
  {
    id: 108,
    name: "Portfólio",
    description: "Projeto pessoal com objetivo de divulgar meu trabalho como desenvolvedora Front-end.",
    code: "https://github.com/ValeskaLeandro/puppies-petshop",
    deploy: "https://valeskaleandro.github.io/puppies-petshop/",
    tecnologys: [SiReact, TbBrandVite, SiStyledcomponents, SiTypescript],
    img: "./projects/portfolio1.png"
  },
]