import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="container">
      <Image />
      <Main />
    </div>
  );
}

function Image() {
  return (
    <div>
      <img src="img/fathia.jpg" alt="my-image" className="img"></img>
    </div>
  );
}
function Main() {
  return (
    <div>
      <h1 className="h1">Fathia Adepoju</h1>
      <p className="paragraph">
        A frontend developer and also a beginner in backend development. when
        not coding or preparing for a course. i like to read story books, to
        cook and eat, or to just watch some thriller movies
      </p>
      <Skill />
    </div>
  );
}
function Skill() {
  return (
    <div>
      {skills.map((skill) => (
        <Button button={skill} />
      ))}
      ;
    </div>
  );
}
function Button({ button }) {
  return (
    <span className="button">
      <button className="button-1" style={{ backgroundColor: button.color }}>
        {button.skill}
        {button.level === "beginner" ? "👶" : ""}
        {button.level === "intermediate" ? "👍" : ""}
        {button.level === "advanced" ? "💪" : null}
      </button>
    </span>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
