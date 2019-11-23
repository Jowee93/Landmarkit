import React from "react";
import logo from "./logo.svg";
import "./App.css"
import { resolve } from "dns";
import { reject } from "q";
<<<<<<< HEAD
import NavbarComponent from "./components/NavbarComponent";
import FunModal from './components/funModal';
import GenModal from './components/genModal';
=======
import { Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
>>>>>>> Add API to capture & upload image and post request to flask server

class App extends React.Component {
  state = {
    image: "",
    user: "",
    landmark: ""
  };

  // JW - This function is used to upload pictures via camera or photo storage
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
        {/* <header className="App-header">
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
<<<<<<< HEAD
          <br />
          <div className="App-buttons">
            <GenModal />
            <br />
            <FunModal />
          </div>
        </header>
        <NavbarComponent></NavbarComponent>
=======
        </header> */}
        <Route
          path="/"
          component={props => {
            return <LandingPage {...props} />;
          }}
        />
>>>>>>> Add API to capture & upload image and post request to flask server
      </div>
    );
  }
}

export default App;
