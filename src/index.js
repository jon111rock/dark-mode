import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <AppContainer>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </AppContainer>,
  document.getElementById("root")
);
