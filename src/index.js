import ReactDOM from "react-dom/client";
import { MessageList } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return <MessageList />;
};

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
