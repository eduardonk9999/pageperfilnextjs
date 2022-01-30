import Image from 'next/image'


import perfilImg from '../../public/imgs/eu.png';
import linkedin from '../../public/imgs/Group 1.svg';
import insta from '../../public/imgs/instagram 3.svg';
import github from '../../public/imgs/XMLID 124.svg';



function Header() {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="imgEu">
          <Image className="imgPerfil" src={perfilImg} alt="Picture of the author" />
        </div>
        <h1>Edu Silva</h1>
        <h2>
          Fala meu Querido, me chamo Eduardo, apaixonado por JavaScript e seu universo.
        </h2>

      
        <nav className="menu-social">
          <a href="https://www.linkedin.com/in/eduardo-silva-537963160/">
            <Image src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/eduardosilvadev/">
            <Image src={insta} alt="insta" />
          </a>
          <a href="https://github.com/eduardonk9999">
            <Image src={github} alt="github" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
