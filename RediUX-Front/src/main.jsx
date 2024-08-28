import React from "react";
import ReactDOM from "react-dom/client";

import Router from "./routes";

import "./styles/buttons.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
