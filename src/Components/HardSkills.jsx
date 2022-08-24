import '../styles/hardskills.css';
import seta from '../images/seta.png';
import setaCima from '../images/seta-cima.png';
import html from '../images/html.png';
import css from '../images/css.jpeg';
import js from '../images/js.png';
import react from '../images/react.png';
import docker from '../images/docker.png';
import mysql from '../images/mysql.png';


function HardSkills() {
  return (
    <section id="hard-skills" className="hard-skills">
      <div className="seta-cima">
        <a className="link-img" href="#aboutdev">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <div className="container-h2-list">
        <h2
          data-aos="fade-right"
          ata-aos-delay="300"
          data-aos-duration="800"
        >{ '<Hard Skills/>' }</h2>
        <ul className="hard-list">
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="500">
            <img src={ html } alt="html" width="120px" />
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="700">
            <img src={ css } alt="css" width="120" />
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="900">
            <img src={ js } alt="js" width="130" />
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1100">
            <img src={ react } alt="" width="150" />
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1300">
            <img src={ docker } alt="" width="150" />
          </li>
          <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1500">
            <img src={ mysql } alt="" width="150" />
          </li>
        </ul>
      </div>
      <div className="seta">
        <a className="link-img" href="#projects">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </section>
  );
}

export default HardSkills;