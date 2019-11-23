import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
=======
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Add API to capture & upload image and post request to flask server

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// defineCustomElements(window);
