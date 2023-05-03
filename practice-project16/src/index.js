import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CartStore from "./store/CartStore";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={CartStore}>
    <App />
  </Provider>
);
