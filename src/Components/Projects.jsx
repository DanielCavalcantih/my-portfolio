import projects from "../Services/projects";
import "../styles/projects.css";
import github from "../images/githubimg.png";
import { useState } from "react";
import ReactPlayer from "react-player";
import close from "../images/close.png";

function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-right" ata-aos-delay="300" data-aos-duration="800">
        {"<Favorite Projects/>"}
      </h2>
      <div className="list-git">
        <ul className="list-projects">
          {projects.map((project) => (
            <li
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={project.id * 200}
              key={project.id}
            >
              <button onClick={() => handleOpenProject(project)}>
                <img
                  className="img-project"
                  height="200"
                  src={project.project_img}
                  alt=""
                />
                <div className="name-project">
                  <p>{project.project_name}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <span
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="900"
          className="more-projects"
        >
          More projects in my{" "}
          <a href="https://github.com/DanielCavalcantih">
            <img width="200" src={github} alt="" />
          </a>
          .
        </span>
      </div>
      {openModal && (
        <div className="modal-project">
          <div className="container-project">
            <button
              className="button-close"
              onClick={() => {
                setOpenModal(false);
                setSelectedProject({});
              }}
            >
              <img src={close} width={28} alt="" />
            </button>
            <h3 className="title-project">{selectedProject.project_name}</h3>
            <div className="container-video-text">
              <div className="container-video">
                <ReactPlayer
                  height={"300px"}
                  width={"100%"}
                  url={selectedProject.project_video}
                  controls
                  className="video"
                />
              </div>
              <div className="container-text">
                <div className="description-text">
                  <h4>Description:</h4>
                  <p>{selectedProject.description}</p>
                </div>
                <div>
                  <h4>Tools:</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "16px",
                      marginTop: "10px",
                    }}
                  >
                    {selectedProject.tools.map((item: any) => (
                      <img src={item} alt="" width={32} />
                    ))}
                  </div>
                </div>
                <a
                  className="button-link"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
