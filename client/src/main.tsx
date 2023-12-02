import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import Todos from "./pages/Todos";
import StateProvider from "./state/state-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <Todos />
    </StateProvider>
  </React.StrictMode>
);
