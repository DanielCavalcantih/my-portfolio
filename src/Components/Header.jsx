import '../styles/header.css';
import seta from '../images/seta.png';

function Header() {
  return (
    <header id="home" className="header-main">
      <nav>
        <a className="link-nav" href="#about">Início</a>
        <a className="link-nav" href="#aboutme">Sobre</a>
        <a className="link-nav" href="#about-dev">Carreira</a>
        <a className="link-nav" href="#hard-skills">Hard Skills</a>
        <a className="link-nav" href="#projects">Projetos</a>
        <a className="link-nav" href="#soft-skills">Soft Skills</a>
      </nav>
      <div className="container-title">
        <h1 className="title typing-animation"><span>const</span> <span>nome =</span> 'Daniel Cavalcanti';</h1>
        <p className="subtitle blank"><span>const</span> <span>cargo =</span> 'Dev Full-Stack';</p>
      </div>
      <div className="knowMe">
        <h2 className="blank2">Vem me conhecer !</h2>
        <a href="#about" className="link-img">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header;