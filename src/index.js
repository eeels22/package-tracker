// NPM packages
import React from "react";
import ReactDOM from "react-dom";

// Project files
import App from "./App";
import "./i18n";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
