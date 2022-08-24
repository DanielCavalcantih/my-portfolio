import '../styles/softskills.css';
import setaCima from '../images/seta-cima.png';

function SoftSkills() {
  return (
    <section className="soft-skills" id="soft-skills">
      <div className="seta-cima">
        <a className="link-img" href="#projects">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <div className="container-gif-skills">
        <div className="container-list-title">
          <div className="container-img-title">
            <h2
              data-aos="fade-right"
              ata-aos-delay="300"
              data-aos-duration="800"
            >{ '<Soft Skills/>' }</h2>
            <img
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
              src="https://miro.medium.com/max/1000/0*6HsfF93BrufIIiSX"
              alt=""
            />
          </div>
          <ul className="soft-list">
            <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="700">
                <h3>Comunicação</h3>
                <p>A comunicação é extremamente importante no ambiente de trabalho, costumo ser comunicativo com minha equipe de desenvolvimento.</p>
            </li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="900">
                <h3>Autogestão</h3>
                <p>Me controlo efetivamente meus comportamentos diate de gatilhos emocionais.</p>
            </li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1100">
                <h3>Liderança</h3>
                <p>Busco sempre influenciar e conduzir minha equipe na luta por um mesmo objetivo, contando sempre com a participação de todos e abrindo portas para que a equipe possa participar do processo.</p>
            </li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1300">
                <h3>Empatia</h3>
                <p>Tento sempre sentir o que sentiria outra pessoa, caso estivesse na mesma situação vivenciada por ela.</p>
            </li>
            <li data-aos="fade-right" data-aos-duration="800" data-aos-delay="1500">
                <h3>Flexibilidade e Resiliência</h3>
                <p>Tenho alta capacidade de adaptação diante das mudanças que ocorrem na minha vida.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SoftSkills;