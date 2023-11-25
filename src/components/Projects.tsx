const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>
        My <span>Projects</span>
      </h2>
      <div className="projects-wrapper">
        <div className="project-box">
          <img src="./images/weatherApp.jpg" alt="Weather-Pic" />
          <div className="project-content">
            <h3>Weather App</h3>
            <p>
              A ReactJS frontend web app dynamically displaying weather
              information.
            </p>
            <a
              href="https://weather-app-two-chi-73.vercel.app/"
              target="_blank"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/taskApp.jpg" alt="Task-Tracker-Pic" />
          <div className="project-content">
            <h3>Task Tracker App</h3>
            <p>A ReactJS To-Do Project that keeps track of tasks.</p>
            <a
              href="https://task-tracker-rouge-three.vercel.app/"
              target="_blank"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="./images/cartApp.jpg" alt="Shopping-Cart-Pic" />
          <div className="project-content">
            <h3>Shopping Cart App</h3>
            <p>A React-TS shopping cart frontend web app.</p>
            <a
              href="https://shopping-cart-gamma-jet.vercel.app/"
              target="_blank"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
