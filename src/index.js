import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
