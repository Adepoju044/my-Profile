import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
      <div>
        <div>
          <Button name="HTML + CSS" styles="button-1" />
          <Button name="Javascript" styles="button-2" />
        </div>
        <div>
          <Button name="Taiwindcss" styles="button-3" />
          <Button name="React" styles="button-4" />
        </div>
      </div>
    </div>
  );
}
function Button(props) {
  return (
    <span className="button">
      <button className={props.styles}>{props.name}</button>
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
