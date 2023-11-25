import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profilePic from "../assets/profile-pic.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="intro-container">
        <h1>
          Hi, I'm <span>Usman Ubaid</span>
        </h1>
        {/* <h3>Frontend Engineer</h3> */}
        <p>
          A <span>Frontend Engineer</span> dedicated to learning JavaScript and
          its frameworks. My journey into web development began after completing
          my Bachelor's Degree in Civil Engineering. Curiosity led me to explore
          the inner workings of web technologies, starting with HTML and CSS.
          The experience of building my first website ignited a passion that led
          me to a career change into web development.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Usman-Ubaid"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/usmanubaid/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={profilePic} alt="my-profile-img" />
      </div>
    </section>
  );
};

export default Home;
