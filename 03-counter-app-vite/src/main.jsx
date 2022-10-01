//IMP LIBRERIAS
import React from "react";
import ReactDOM from "react-dom/client";

//IMP CSS
import "./styles.css";

//IMP COMPONENTES
import { CounterApp } from "./CounterApp.jsx";

//RENDER
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CounterApp value={8080} />
  </React.StrictMode>
);
