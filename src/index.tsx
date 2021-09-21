import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { commonTheme } from "./theme/common";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={commonTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
