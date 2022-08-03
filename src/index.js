import React from "react";
import ReactDOM from "react-dom/client";
import { FunctionComponent, ClassComponent } from "./example";
// import "./index.css";
import styles from "./index.module.css";

const age = 23;
const films = [
  { title: "film1", year: 2020 },
  { title: "film2", year: 2020 },
];
const handleClick = (film) => {
  console.log("click", film);
};

// witout jsx
const Component = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "hello JSX")
  );
};

const Parent = () => {
  return (
    <div className={styles.test}>
      <Component />
      <FunctionComponent age={age} films={films} handleClick={handleClick} />
      <hr />
      <ClassComponent
        age={age}
        films={films}
        handleClick={handleClick}
        p1={false}
        p2={{}}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);
