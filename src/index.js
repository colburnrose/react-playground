import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./paltrows-power-toes/App";
import AppLang from "./lang-context/AppLang";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <AppLang />
  </BrowserRouter>,
  document.getElementById("root")
);
