import "../styles/aboutdev.css";

function AboutDev() {
  return (
    <section id="about-dev" className="about-dev">
      <div className="how-arrive">
        <h2 data-aos="fade-right" ata-aos-delay="300" data-aos-duration="800">
          {"<How I got here/>"}
        </h2>
        <p data-aos="fade-right" data-aos-delay="700" data-aos-duration="800">
          I have always been a technology fanatic, initially I used the computer
          for games and school work, but after discovering programming through
          videos on the internet, I saw that it was what I wanted for my life. I
          started taking some free courses, until I discovered Trybe, where I
          became a professional and acquired knowledge to finally have my first
          job opportunity. I currently work at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://datasysconsultoria.com.br/"
          >
            Datasys Consultoria
          </a>
          , leading the Front-End development team.
        </p>
      </div>
    </section>
  );
}

export default AboutDev;
