import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ConfigureStore from "./core/store/configureStore";
import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigureStore>
    <App />
  </ConfigureStore>
);
