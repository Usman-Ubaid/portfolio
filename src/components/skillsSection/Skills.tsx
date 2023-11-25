import Card from "./Card";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import ts from "../../assets/ts.svg";
import node from "../../assets/node.svg";
import express from "../../assets/express.svg";

const Skills = () => {
  const frontendCardContent = [
    { id: 1, imgSrc: html, cardText: "HTML" },
    { id: 2, imgSrc: css, cardText: "CSS" },
    { id: 3, imgSrc: js, cardText: "JavaScript" },
    { id: 4, imgSrc: react, cardText: "ReactJS" },
    { id: 5, imgSrc: redux, cardText: "Redux" },
    { id: 6, imgSrc: ts, cardText: "TypeScript" },
  ];

  const backendCardContent = [
    { id: 1, imgSrc: node, cardText: "Node" },
    { id: 2, imgSrc: express, cardText: "Express" },
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
