import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.t = {};
    this.state = {
      count: 0,
      films: ["film1", "film2"],
      object: {
        count: 0,
        films: ["film1", "film2"],
      },
    };
    // this.foo = this.foo.bind(this)
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");

    return state;
  }

  // таймеры
  // запросы
  // обновления
  // работа с ДОМ
  // подписки
  // слушатели
  // обновление состояния
  componentDidMount() {
    console.log("componentDidMount");
    // query()
    // addEventListener("click")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // return nextProps.id !== this.props.id;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  // таймеры
  // запросы
  // обновления
  // работа с ДОМ
  // подписки
  // слушатели
  // обновление состояния
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    // if query()
    // if query()
  }

  // отписки таймеров
  // отписки запросов
  // отписки дом ивентов
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 10,
    // });
    this.setState((state) => ({
      count: state.count + 1,
    }));
    this.setState((state) => ({
      count: state.count + 10,
    }));
    // setTimeout(() => {
    //   this.setState((state) => ({
    //     count: state.count + 1,
    //   }));
    //   this.setState((state) => ({
    //     count: state.count + 10,
    //   }));
    // }, 0);
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  addFilm = () => {
    this.setState({
      films: [...this.state.films, "new film"],
    });
  };
  removeFilm = () => {
    this.setState({
      films: this.state.films.filter((film) => film !== "new film"),
    });
  };

  addFilmInObject = () => {
    this.setState({
      object: {
        ...this.state.object,
        films: [...this.state.object.films, "new film"],
      },
    });
  };
  removeFilmInObject = () => {
    this.setState({
      object: {
        ...this.state.object,
        films: this.state.object.films.filter((film) => film !== "new film"),
      },
    });
  };

  render() {
    console.log("render");
    const { count } = this.state;

    return (
      <div>
        <h1>ClassComponent</h1>
        <h1>count {count}</h1>
        <h1>state {JSON.stringify(this.state)}</h1>
        <hr />
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <hr />
        <button onClick={this.addFilm}>addFilm</button>
        <button onClick={this.removeFilm}>removeFilm</button>
        <hr />
        <button onClick={this.addFilmInObject}>addFilmInObject</button>
        <button onClick={this.removeFilmInObject}>removeFilmInObject</button>
      </div>
    );
  }
}

const reducer = (state, payload) => {
  switch (payload.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

function FunctionComponent() {
  const [messageList, setMessageList] = useState([
    { text: "hello", author: "User" },
  ]);
  const [value, setValue] = useState("");

  const [count, setCount] = useState(0);
  const [films, setFilms] = useState(["film1", "film2"]);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    films: ["film1", "film2"],
  });

  useLayoutEffect(() => {
    // работа с ДОМ
    console.log("useLayoutEffect");

    return () => {
      console.log("useLayoutEffect remove");
    };
  }, []);

  useEffect(() => {
    // таймеры
    // запросы
    // обновления
    // подписки
    // слушатели
    // обновление состояния
    console.log("useEffect1");
    const listener = () => {
      console.log("click");
    };

    const id = setInterval(() => {
      // setCount((c) => c + 1);
    }, 1000);

    document.addEventListener("click", listener);

    return () => {
      console.log("useEffect1 remove");

      clearInterval(id);

      document.removeEventListener("click", listener);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect3");

    return () => {
      console.log("useEffect3 remove");
    };
  }, [count]);

  const cb = useCallback(() => {
    console.log("cb");
  }, []);

  const result = useMemo(() => {
    // 5000ms
    return [];
  }, []);

  const addFilm = () => {
    const n = [...films, "new film"];

    setFilms(n);
  };
  const removeFilm = () => {
    const filtredFilms = films.filter((film) => film !== "new film");

    setFilms(filtredFilms);
  };

  return (
    <div>
      <h1>FunctionComponent</h1>
      <h1>count {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount((c) => c - 1)}>decrement</button>
      <hr />
      <h2>{JSON.stringify(films)}</h2>
      <button onClick={addFilm}>addFilm</button>
      <button onClick={removeFilm}>removeFilm</button>
      <hr />
      <h2>{JSON.stringify(state)}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

      <input value={value} onChange={(e) => setValue(e.target.value)} />

      {/* <Child cb={cb}/> */}
    </div>
  );
}

const App = () => {
  const [isVisble, setVisible] = useState(true);

  return (
    <div>
      {isVisble && <FunctionComponent />}
      <button onClick={() => setVisible(!isVisble)}>setVisible</button>
    </div>
  );
};

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
