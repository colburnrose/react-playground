import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./paltrows-power-toes/App";
import AppLang from "./lang-context/AppLang";
import RegistrationForm from "./registrationForm/registrationForm";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <AppLang /> */}
    <RegistrationForm />
  </BrowserRouter>,
  document.getElementById("root")
);
