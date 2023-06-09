import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>
);
