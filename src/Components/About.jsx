import '../styles/about.css';
import seta from '../images/seta.png';
import setaCima from '../images/seta-cima.png';

function About() {
  return (
    <section id="about" className="about">
      <div className="seta-cima">
        <a className="link-img" href="#home">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        Seja muito bem-vindo(a) ao meu portfólio, aqui falarei sobre todo meu percurso para chegar até aqui e mostrarei tudo oque aprendi estudando desenvolvimento web.
      </p>
      <div className="seta">
        <a className="link-img" href="#aboutme">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </section>
  )
}

export default About;