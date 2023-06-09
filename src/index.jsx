import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Codes() {
  console.log("salam");
  return (
    <div>
      <p>Hi, i'm Idris. Programming its very super</p>
      <img src="https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png" />
    </div>
  );
}

root.render(
  <div>
    {Codes()}
    {App()}
    <p>I'm learning React</p>
  </div>
);
