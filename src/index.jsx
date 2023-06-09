import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { Codes } from "./Codes";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <div>
    {Codes()}
    {App()}
    <p>I'm learning React</p>
  </div>
);