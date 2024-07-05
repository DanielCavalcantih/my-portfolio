import "../styles/aboutme.css";
import "../styles/header.css";
import perfil from "../images/Perfil.jpeg";
import linkedin from "../images/logo-link.png";
import github from "../images/github.png";
import downloadCv from "../images/resume-cv.webp";
import pdf from "../Assets/meu-curriculo.pdf";

function AboutMe() {
  return (
    <>
      <section id="aboutme" className="aboutme">
        <div className="container-text-img">
          <div
            data-aos="fade-right"
            ata-aos-delay="300"
            data-aos-duration="800"
            className="text"
          >
            <div className="container-title">
              <h1 className="title-header typing-animation">
                Daniel Cavalcanti
              </h1>
              <p className="subtitle-header blank">Full-Stack Developer</p>
            </div>
            <p className="hello">
              Hello, welcome to my portfolio,
              <br /> let's know me!
            </p>
            <div className="linkedin-cv">
              <a
                href="https://www.linkedin.com/in/daniel-cavalcanti1/"
                target="_blank"
                rel="noreferrer"
              >
                <img width="60" src={linkedin} alt="" />
              </a>
              <a
                href="https://github.com/DanielCavalcantih"
                target="_blank"
                rel="noreferrer"
              >
                <img width="60" src={github} alt="" />
              </a>
              <a className="cv" href={pdf} download="daniel-cavalcanti-cv">
                Download CV
                <img width="37" src={downloadCv} alt="" />
              </a>
            </div>
          </div>
          <div
            data-aos="fade-left"
            ata-aos-delay="300"
            data-aos-duration="800"
            className="img-city-container"
          >
            <img className="img-perfil" width="350" src={perfil} alt="" />
          </div>
        </div>
      </section>
      <section id="aboutme-mobile" className="aboutme-mobile">
        <div className="container-text-img">
          <div
            data-aos="fade-right"
            ata-aos-delay="300"
            data-aos-duration="800"
            className="text"
          >
            <div className="container-title">
              <h1 className="title-header typing-animation">
                Daniel Cavalcanti
              </h1>
              <p className="subtitle-header blank">Full-Stack Developer</p>
            </div>
            <p className="hello">
              Hello, welcome to my portfolio,
              <br /> let's know me!
            </p>
            <div className="img-links-mobile">
              <div
                data-aos="fade-left"
                ata-aos-delay="300"
                data-aos-duration="800"
                className="img-city-container"
              >
                <img className="img-perfil" width="350" src={perfil} alt="" />
              </div>
              <div className="linkedin-cv">
                <a
                  href="https://www.linkedin.com/in/daniel-cavalcanti1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="40" src={linkedin} alt="" />
                </a>
                <a
                  href="https://github.com/DanielCavalcantih"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width="40" src={github} alt="" />
                </a>
                <a className="cv" href={pdf} download="daniel-cavalcanti-cv">
                  <img width="30" src={downloadCv} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
