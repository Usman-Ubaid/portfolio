const About = () => {
  return (
    <section className="about" id="about">
      <h2>
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src="./images/profile-pic.png" alt="my-pic" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <p>
          I am a Frontend Web Engineer dedicated to learning JavaScript and
          JavaScript frameworks. My journey into web development began after
          completing my Bachelor's Degree in Civil Engineering. Curiosity led me
          to explore the inner workings of web technologies, starting with HTML
          and CSS. The experience of building my first website ignited a passion
          that led to a career change into web development.
        </p>
      </div>
    </section>
  );
};

export default About;
