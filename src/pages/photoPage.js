import React from "react";
import GoogleMapComponent from "../components/googleMapComponent";
import PhotoComponent from "../components/photoComponent";

class PhotoPage extends React.Component {
  state = {
    currentImage: ""
  };

  render() {
    return (
      <div>
        <GoogleMapComponent />
        <PhotoComponent />
      </div>
    );
  }
}

export default PhotoPage;
