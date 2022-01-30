
import Head from 'next/head'
import Footer from './../src/components/Footer/Footer';
import Header from './../src/components/Header/Header';



export default function Home() {
  return (
    <>
       <Head>
        <title>Eduardo Silva - Desenvolvedor</title>
        <meta name="description" content="Eduardo Silva - Front End" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="containerPrincipal">
        <Header />
        <div className="wrapper-body wrapper">
          <p>
            🖖🏻 Olá meu nome é Eduardo Silva, trabalho com desenvolvimento Front-End e crio conteúdo para o 
            <a href="https://www.instagram.com/eduardosilvadev/" target="_blank"><strong> @eduardosilvadev</strong></a>.
          </p>
          <p>
            ☕️ Atualmente trabalho como Desenvolvedor Front-End focado em React.Js na <a href="https://invillia.com/global-growth-framework/" target="_blank"><strong>Invillia</strong> </a>
            uma das principais empresas de Tecnologia do Brasil.
          </p>
          <p>🎓 Cursando Analise e Desenvolvimento de Sistemas.</p>


        
            <h3>🚀 Experiências</h3>
            <ul className="listhome">
              <li>
                <a href="https://invillia.com/global-growth-framework/" target='_blank'>
                  <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHvSIOAC3fQcA/company-logo_100_100/0/1635970036063?e=1651708800&v=beta&t=gAejD9yLLaxky0hFkQzo7L4wtIBY8BzMt_cA8BF87Lc" alt="darkSide" />
                  <strong>Invillia</strong>
                </a> 
                <p>Ano 2022 - Até o Momento.</p> 
                <p>Uma das Principais empresas de Tecnologia do Brasil!</p>
              </li>
              <li>
                <a href="https://www.darksidebooks.com.br/" target='_blank'>
                  <img src="https://media-exp1.licdn.com/dms/image/C560BAQGTv-R2dprpVA/company-logo_100_100/0/1519867985231?e=1651708800&v=beta&t=ntIyHoIWdHDoBtRnhH1kwHnywF1S9i_rUGfDb0DSIP4" alt="darkSide" />
                  <strong>DarkSide</strong> 
                </a> 
                <p>Maio de 2021 até Janeiro de 2022.</p> 
                <p>Principal e-commerce de livros de terror do Brasil!</p>
              </li>
              <li>
              <a href="https://www.vagalume.com.br/" target='_blank'>
                  <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHxtuQU3OaJhg/company-logo_100_100/0/1519871637341?e=1651708800&v=beta&t=2EUbKedUAY2A4IOAi35MEZ1jkE5ZQ37GV_sl9djeOH0" alt="Vagalume" />
                  <strong>Vagalume</strong> 
                </a> 
                <p>Jan de 2021 até Maio de 2021.</p> 
                <p>Maior Site de música do Brasil!</p>
              </li>
              <li>
                <a href="https://www.okngroup.com.br/" target='_blank'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFGIDX6YKjnwA/company-logo_100_100/0/1640203205039?e=1651708800&v=beta&t=ppd3yTb0_rqymXX9KpnsphBi4e9GCBxTJpL8AZP7qNo" alt="OKN" />
                    <strong>OKN Group</strong> 
                  </a>
                  <p>2017 até Dezembro de 2020</p>
                  <p>Agência de PB onde inicie minha carreira!</p> 
              </li>
            </ul>
        
    
          
          
          
        </div>
      </div>
    </>
  )
}
