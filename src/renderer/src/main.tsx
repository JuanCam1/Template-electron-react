import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./routes/AppRouter";
import "./assets/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
