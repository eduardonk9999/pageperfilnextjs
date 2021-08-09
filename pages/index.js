import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eduardo Silva - Front End</title>
        <meta name="description" content="Eduardo Silva - Front End" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="wrapper">
        <p>

          Olá meu nome é Eduardo Silva, trabalho com Front-end uns 6 anos, sou apaixonado por JavaScript e seu universo.
        </p>
        <p>
          Atualmente trabalho como Front-End Developer na <a href="https://www.darksidebooks.com.br/" >DarkSide Books</a> (Uma das maiores
          editoras nacionais de Livros),
          Cursando Analise e Desenvolvimento de Sistemas na Faculdade Descomplica.
          trabalhei um tempo no site <a href="https://www.vagalume.com.br/" >Vagalume</a> (Maior Site de
          música do brasil), e iniciei
          minha carreira na <a href="https://www.okngroup.com.br/" >OKN Group</a>.

          Essa é minha história profissional bem resumida hehe. Além do meu Trabalho atual, crio conteudos de Front-End
          para o Instagram, relacionados a JavaScript e fremeorks, como React Js, Vue Js.
        </p>
        <p>
          Skills: React Js, React Native, Vue Js, JavaScript, Html, CSS, SASS.
        </p>
        <p>
          Coisas que eu curto fazer: Jogar Pokemon GO, todo universo da Nintendo, atualmente tentando aprender Guitarra
          hehe. E me
          preparando pra correr 5km kkkk.
        </p>
        <p>Apprentice Guitarist 🎸</p>
        <p>IOT Enthusiast ⚙️</p>
        <p>Amante do mundo 8Bit e pixel arte 👾</p>
      </div>
      <footer className={styles.footer}>
        <div className="logo">
          <svg width="106" height="49" viewBox="0 0 106 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.50114 33.848C2.50914 33.4347 1.72381 32.8147 1.14514 31.988C0.566474 31.12 0.277141 30.1487 0.277141 29.074V26.966C0.277141 25.8913 0.566474 24.9407 1.14514 24.114C1.72381 23.246 2.50914 22.6053 3.50114 22.192L30.0371 11.528C30.8225 11.1973 31.5665 11.28 32.2691 11.776C32.9718 12.272 33.3231 12.9333 33.3231 13.76V13.946C33.3231 15.0207 33.0131 15.992 32.3931 16.86C31.8145 17.728 31.0291 18.348 30.0371 18.72L5.29914 27.958C5.25781 27.958 5.23714 27.9787 5.23714 28.02C5.23714 28.0613 5.25781 28.082 5.29914 28.082L30.0371 37.32C31.0291 37.692 31.8145 38.312 32.3931 39.18C33.0131 40.048 33.3231 41.0193 33.3231 42.094V42.28C33.3231 43.1067 32.9718 43.768 32.2691 44.264C31.5665 44.76 30.8225 44.8427 30.0371 44.512L3.50114 33.848ZM42.7408 48.48C41.9142 48.48 41.2735 48.1287 40.8188 47.426C40.4055 46.7233 40.3642 46 40.6948 45.256L59.2948 3.964C59.7495 3.01333 60.4315 2.24866 61.3408 1.67C62.2502 1.05 63.2215 0.739999 64.2548 0.739999H65.0608C65.9288 0.739999 66.5695 1.09133 66.9828 1.794C67.4375 2.49666 67.4788 3.22 67.1068 3.964L48.5068 45.256C48.0935 46.2067 47.4322 46.9713 46.5228 47.55C45.6135 48.17 44.6215 48.48 43.5468 48.48H42.7408ZM75.8997 44.512C75.1144 44.8427 74.3704 44.76 73.6677 44.264C72.965 43.768 72.6137 43.1067 72.6137 42.28V42.094C72.6137 41.0193 72.903 40.048 73.4817 39.18C74.1017 38.312 74.9077 37.692 75.8997 37.32L100.638 28.082C100.679 28.082 100.7 28.0613 100.7 28.02C100.7 27.9787 100.679 27.958 100.638 27.958L75.8997 18.72C74.9077 18.348 74.1017 17.728 73.4817 16.86C72.903 15.992 72.6137 15.0207 72.6137 13.946V13.76C72.6137 12.9333 72.965 12.272 73.6677 11.776C74.3704 11.28 75.1144 11.1973 75.8997 11.528L102.436 22.192C103.428 22.6053 104.213 23.246 104.792 24.114C105.37 24.9407 105.66 25.8913 105.66 26.966V29.074C105.66 30.1487 105.37 31.12 104.792 31.988C104.213 32.8147 103.428 33.4347 102.436 33.848L75.8997 44.512Z" fill="white" />
          </svg>
        </div>
      </footer>
    </div>
  )
}
