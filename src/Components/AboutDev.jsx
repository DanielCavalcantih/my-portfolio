import '../styles/aboutdev.css';
import seta from '../images/seta.png';
import setaCima from '../images/seta-cima.png';

function AboutDev() {
  return (
    <section id="aboutdev" className="about-dev">
      <div className="seta-cima">
        <a className="link-img" href="#aboutme">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <div className="how-arrive">
          <h2
            data-aos="fade-right"
            ata-aos-delay="300"
            data-aos-duration="800"
          >{ '<Como cheguei até aqui/>' }</h2>
          <p
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-duration="800"
          >Sempre fui fanático por tecnologia. Meu pai era dono de uma Lan House, e lá foi onde tive meu primeiro contato com um computador. No início, via o computador como um meio de diversão, jogava diversos jogos, assistia muitos vídeos e filmes, mas nunca observei com outros olhos. Até que um dia tive a curiosidade de saber como aquilo tudo que eu estava vendo na tela funcionava, oque tinha por trás daquilo tudo, e foi assim que descobri o desenvolvimento web. Comecei a fazer alguns cursos em algumas plataformas online até descobrir a <a href="https://www.betrybe.com/" className="trybe">Trybe</a> e seu amplo e vasto mundo de oportunidades.</p>
      </div>
      <div className="seta">
        <a className="link-img" href="#hard-skills">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </section>
  );
}

export default AboutDev;