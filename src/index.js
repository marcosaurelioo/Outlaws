import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import GlobalStyles from "./Styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
