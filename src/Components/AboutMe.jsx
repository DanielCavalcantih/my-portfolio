import '../styles/aboutme.css';
import seta from '../images/seta.png';
import setaCima from '../images/seta-cima.png';
import perfil from '../images/Perfil.jpeg';
import linkedin from '../images/linkedinimg.png';
import { useState } from 'react';

function AboutMe() {
  const [cv, setCv] = useState('Meu currículo');

  return (
    <section id="aboutme" className="aboutme">
      <div className="seta-cima">
        <a className="link-img" href="#about">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <div className="container-text-img">
        <div
          data-aos="fade-right"
          ata-aos-delay="300"
          data-aos-duration="800"
          className="text"
        >
          <h2>{ '<Sobre Mim/>' }</h2>
          <p>
            Meu nome é Daniel, sou de Recife-PE. Gosto bastande de sair com amigos e passeios com minha família, dou muito valor a quem tá sempre do meu lado em diversos momentos da minha vida.
          </p>
          <div className="linkedin-cv">
            <a href="https://www.linkedin.com/in/daniel-cavalcanti1/">
              <img width="200" src={ linkedin } alt="" />
            </a>
            <a
              onMouseOut={ () => setCv('Meu currículo') }
              onMouseEnter={ () => setCv('Baixar CV') }
              className="cv"
              href="../Assets/CURRICULO-DANIEL.pdf"
              download
            >
              { cv }
              <img width="37" src="https://freepikpsd.com/file/2019/10/download-png-icons-2-Transparent-Images.png" alt="" />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          ata-aos-delay="300"
          data-aos-duration="800"
          className="img-city-container"
        >
          <img className="img-perfil" width="350" src={ perfil } alt="" />
        </div>
      </div>
      <div className="seta">
        <a className="link-img" href="#aboutdev">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </section>
  );
}

export default AboutMe;