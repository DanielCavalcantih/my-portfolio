import '../styles/header.css';
import seta from '../images/seta.png';

function Header() {
  return (
    <header id="home" className="header-main">
      <div className="container-title">
        <h1 className="title typing-animation"><span>const</span> <span>name =</span> 'Daniel Cavalcanti';</h1>
        <p className="subtitle blank"><span>const</span> <span>office =</span> 'Dev Full-Stack';</p>
      </div>
      <div className="knowMe">
        <h2 className="blank2">Let`s know me!</h2>
        <a href="#about" className="link-img">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </header>
  )
}

export default Header;