const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>
      <div className="wrapper">
        <div className="column-box">
          <h3>Experience</h3>
          <div className="content-box">
            <div className="content">
              <div className="content-card">
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  <p>
                    <time dateTime="2023-04-26/2023-06-27">
                      Apr 2023 - June 2023
                    </time>
                  </p>
                </div>
                <h3>Frontend Developer - ProductBox Software Studio</h3>
                <ul>
                  <li>
                    Assisted in translating Figma designs into responsive
                    websites using ReactJS Framework.
                  </li>
                  <li>
                    Implemented API integration for user authentication,
                    authorization, and seamless data transfer between the
                    backend and frontend using Axios and Formik libraries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="column-box">
          <h3>Education</h3>
          <div className="content-box">
            <div className="content">
              <div className="content-card">
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  <p>
                    <time dateTime="2022-09-20/2023-02-12">
                      Sep 2023 - Feb 2023
                    </time>
                  </p>
                </div>
                <h3>Front-End Developer Professional Certificate - Coursera</h3>
                <ul>
                  <li>
                    Developed a responsive website using HTML to structure
                    content, CSS to handle visual style, and JavaScript to
                    develop interactive experiences.
                  </li>
                  <li>
                    Learned Bootstrap CSS Framework to create webpages and work
                    with GitHub repositories and version control.
                  </li>
                  <li>
                    Learned to use React in relation to Javascript libraries and
                    frameworks.
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="content-card">
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  <p>
                    <time dateTime="2021-10-20/Present">
                      Oct 2021 - Present
                    </time>
                  </p>
                </div>
                <h3>Masters Degree - Civil Systems Engineering</h3>
              </div>
            </div>
            <div className="content">
              <div className="content-card">
                <div className="year">
                  <i className="bx bxs-calendar"></i>
                  <p>
                    <time dateTime="2021-10-20/Present">
                      Sep 2016 - July 2020
                    </time>
                  </p>
                </div>
                <h3>Bachelors Degree - Civil Engineering</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
