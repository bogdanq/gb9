import React from "react";

export const reactElement = (
  <div>
    <h1>App</h1>
  </div>
);

const FilmsList = ({ films, title, handleClick }) => {
  return (
    <div>
      <h1>{title}</h1>

      {films.map((film) => {
        return (
          <div>
            <h3>{film.title}</h3>
            <h3>{film.year}</h3>
            <button onClick={() => handleClick(film)}>click me</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const FunctionComponent = ({ age, ...rest }) => {
  return (
    <div className="test">
      <h1>FunctionComponent</h1>
      <h2>age: {age}</h2>

      <FilmsList {...rest} title="function films" />
      <div>{reactElement}</div>
    </div>
  );
};

export class ClassComponent extends React.Component {
  render() {
    const { age, films, handleClick } = this.props;

    return (
      <div className="test">
        <h1>ClassComponent</h1>

        <h2>age: {age}</h2>

        <FilmsList
          films={films}
          handleClick={handleClick}
          title="class films"
        />

        <div>{reactElement}</div>
      </div>
    );
  }
}
