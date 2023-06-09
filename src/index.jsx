import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Codes from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Codes ad="Idris" yas={36} />
    <h3>Men React oyrenirem</h3>
  </div>
);
