import { projects } from "./data";

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="project-box">
          <img src={project.imgSrc} />
          <div className="tags">
            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.webapp} target="_blank">
                <button>View App</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
