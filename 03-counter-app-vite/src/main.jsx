//IMP LIBRERIAS
import React from "react";
import ReactDOM from "react-dom/client";

//IMP CSS
import "./styles.css";

//IMP COMPONENTES
import { CounterApp } from "./CounterApp.jsx";
import { FirstApp } from "./FirstApp.jsx";

//RENDER
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CounterApp value={8080} />
    {/* <FirstApp title="Hola, probando desde main" /> */}
  </React.StrictMode>
);
