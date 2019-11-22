import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { resolve } from "dns";
import { reject } from "q";

import {
  Plugins,
  CameraResultType,
  Camera,
  CameraSource
} from "@capacitor/core";

class App extends React.Component {
  state = {
    image: ""
  };

  upload = Promise => {
    return new Promise(async (resolve, reject) => {
      const filePicker = document.querySelector("input");

      if (!filePicker || !filePicker.files || filePicker.files.length <= 0) {
        reject("No file selected.");
        return;
      }

      const myFile = filePicker.files[0];

      console.log(myFile);

      resolve();
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input
            type="file"
            accept="image/x-png, image/jpeg, image/gif"
            onChange={() => this.upload()}
          ></input>
          <img src={this.image} />
          <button onClick={this.takephoto}>Take Photo</button>
        </header>
      </div>
    );
  }
}

export default App;
