import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/css/main.css";

import "@fontsource/roboto";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
