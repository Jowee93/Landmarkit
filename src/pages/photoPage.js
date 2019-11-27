import React from "react";
import GoogleMapComponent from "../components/googleMapComponent";
import PhotoComponent from "../components/photoComponent";
import NavBarComponent from "../components/NavbarComponent";

class PhotoPage extends React.Component {
  render() {
    return (
      <div>
        <h1>PhotoPage</h1>

        <GoogleMapComponent />
        <PhotoComponent />
        <NavBarComponent />
      </div>
    );
  }
}

export default PhotoPage;
