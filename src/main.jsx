import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter hashType="hashbang">
      <App />
    </HashRouter>
  </React.StrictMode>
);
