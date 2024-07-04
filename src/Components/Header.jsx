import '../styles/header.css';

function Header() {
  return (
    <header id="home" className="header-main">
      <div className="container-title">
        <h1 className="title typing-animation"><span>const</span> <span>name =</span> 'Daniel Cavalcanti';</h1>
        <p className="subtitle blank"><span>const</span> <span>office =</span> 'Dev Full-Stack';</p>
      </div>
    </header>
  )
}

export default Header;