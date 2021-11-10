import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes.js";
import Logar from "./pages/Logar/login"
import Home from "./pages/Home/home"

ReactDOM.render(
  <React.StrictMode>
    <Logar />
  </React.StrictMode>,
  document.getElementById("root")
);
