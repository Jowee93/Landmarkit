import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { resolve } from "dns";
import { reject } from "q";
import NavbarComponent from "./components/NavbarComponent";
import FunModal from "./components/funModal";
import GenModal from "./components/genModal";
import { Route, withRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import PhotoPage from "./pages/photoPage";
import MainPage from "./pages/mainPage";
import MyProfile from "./pages/myProfile";
import Notification from "./components/inboxPage";
import SignUp from "./components/signUp";
import HomePage from "./pages/inOrOutPage";
import NewFact from "./components/NewFact";
import SearchPage from "./pages/searchPage";
import GoogleMap from "./components/googleMapComponent";
import Location from "./components/Location";
import TransitionTest from "./components/transitionTest";

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
      <div className="App-body">
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
          <br />
          <div className="App-buttons">
            <GenModal />
            <br />
            <FunModal />
          </div>
        </header>
        <NavbarComponent></NavbarComponent>
        </header> */}
          <Route
            path="/"
            exact
            component={props => {
              return <HomePage {...props} />;
            }}
          />
          {/* <Route
            path="/photo/current"
            exact
            component={props => {
              return <PhotoPage {...props} />;
            }}
          /> */}
          <Route
            path="/photo/:id"
            component={props => {
              return <PhotoPage {...props} />;
            }}
          />
          <Route
            path="/inbox"
            component={props => {
              return <Notification {...props} />;
            }}
          />
          <Route
            path="/main"
            component={props => {
              return <MainPage {...props} />;
            }}
          />
          <Route
            path="/myprofile"
            component={props => {
              return <MyProfile {...props} />;
            }}
          />
          <Route
            path="/image/:id/newfact"
            component={props => {
              return <NewFact {...props} />;
            }}
          />
          <Route
            path="/search"
            component={props => {
              return <SearchPage {...props} />;
            }}
          />
          <Route
            path="/googlemap"
            component={props => {
              return <GoogleMap {...props} />;
            }}
          />
          <Route
            path="/searchlocation"
            component={props => {
              return <Location {...props} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
