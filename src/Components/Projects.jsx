import projects from '../Services/projects';
import '../styles/projects.css';
import seta from '../images/seta.png';
import setaCima from '../images/seta-cima.png';
import github from '../images/githubimg.png';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="seta-cima">
        <a className="link-img" href="#hard-skills">
          <img width="80" src={ setaCima } alt="" />
        </a>
      </div>
      <h2
        data-aos="fade-right"
        ata-aos-delay="300"
        data-aos-duration="800"
      >{ '<Meus Projetos/>' }</h2>
      <ul>
        {
          projects.map(project => (
            <a target="blank" key={ project.id } href={ project.link }>
              <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay={
                project.id === 1
                  ? '500'
                  : '700'
              }>
                {
                  project.complete
                    ? <img className="img-project" width="230" src={ project.project_img } alt="" />
                    : <p className="in-progress">Em breve...</p>
                }
                <h3>{ project.project_name }</h3>
              </li>
            </a>
          ))
        }
      </ul>
      <span data-aos="zoom-in" data-aos-duration="800" data-aos-delay="900" className="more-projects">Mais projetos em meu <a href="https://github.com/DanielCavalcantih"><img width="200" src={ github } alt="" /></a></span>
      <div className="seta">
        <a className="link-img" href="#soft-skills">
          <img width="80" src={ seta } alt="" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
