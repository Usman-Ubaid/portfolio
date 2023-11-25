import ProjectCard from "./projectSection/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>
        My <span>Projects</span>
      </h2>
      <div className="projects-wrapper">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
