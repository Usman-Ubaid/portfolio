import Card from "./Card";

const Skills = () => {
  const frontendCardContent = [
    { id: 1, imgSrc: "../src/assets/html.svg", cardText: "HTML" },
    { id: 2, imgSrc: "../src/assets/css.svg", cardText: "CSS" },
    { id: 3, imgSrc: "../src/assets/js.svg", cardText: "JavaScript" },
    { id: 4, imgSrc: "../src/assets/react.svg", cardText: "ReactJS" },
    { id: 5, imgSrc: "../src/assets/redux.svg", cardText: "Redux" },
    { id: 6, imgSrc: "../src/assets/ts.svg", cardText: "TypeScript" },
  ];

  const backendCardContent = [
    { id: 1, imgSrc: "../src/assets/node.svg", cardText: "HTML" },
    { id: 2, imgSrc: "../src/assets/express.svg", cardText: "CSS" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>
        My <span>Skills</span>
      </h2>
      <div className="card-wrapper">
        <Card header="Frontend" cardContent={frontendCardContent} />
        <Card header="Backend" cardContent={backendCardContent} />
      </div>
    </section>
  );
};

export default Skills;
