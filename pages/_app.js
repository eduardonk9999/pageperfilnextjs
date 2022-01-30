

import Image from 'next/image'

import Head from 'next/head'
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';

import invillia from '../src/public/INVILLIA.jpeg';
import okn from '../src/public/OKN.jpeg';
import vagalume from '../src/public/vagalume.jpeg';
import darkside from '../src/public/DARK.jpeg';
import '../src/styles/globals.css';


function MyApp() {
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
         <a href="https://www.instagram.com/eduardosilvadev/"><strong> @eduardosilvadev</strong></a>.
       </p>
       <p>
         ☕️ Atualmente trabalho como Desenvolvedor Front-End focado em React.Js na <a href="https://invillia.com/global-growth-framework/"><strong>Invillia</strong> </a>
         uma das principais empresas de Tecnologia do Brasil.
       </p>
       <p>🎓 Cursando Analise e Desenvolvimento de Sistemas.</p>


     
         <h3>🚀 Experiências</h3>
         <ul className="listhome">
           <li>
             <a href="https://invillia.com/global-growth-framework/">
               <Image 
                 src={invillia} 

               />
               <strong>Invillia</strong>
             </a> 
             <p>Ano 2022 - Até o Momento.</p> 
             <p>Uma das Principais empresas de Tecnologia do Brasil!</p>
           </li>
           <li>
             <a href="https://www.darksidebooks.com.br/">
               <Image 
               src={darkside}
               />
               <strong>DarkSide</strong> 
             </a> 
             <p>Maio de 2021 até Janeiro de 2022.</p> 
             <p>Principal e-commerce de livros de terror do Brasil!</p>
           </li>
           <li>
           <a href="https://www.vagalume.com.br/">
               <Image 
                 src={vagalume}
               />
               <strong>Vagalume</strong> 
             </a> 
             <p>Jan de 2021 até Maio de 2021.</p> 
             <p>Maior Site de música do Brasil!</p>
           </li>
           <li>
             <a href="https://www.okngroup.com.br/">
                 <Image 
                   src={okn}
                 />
                 <strong>OKN Group</strong> 
               </a>
               <p>2017 até Dezembro de 2020</p>
               <p>Agência de PB onde inicie minha carreira!</p> 
           </li>
         </ul>
       <Footer />
     </div>
   </div>
 </>
  )
}

export default MyApp
