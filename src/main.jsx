import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth } from "./context/Auth";
import { Provider } from "react-redux";
import store from "./store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Auth> */}
  </React.StrictMode>
);
