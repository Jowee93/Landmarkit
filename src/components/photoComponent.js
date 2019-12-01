import React from "react";
import { Picture } from "react-responsive-picture";

const photoStyle = {
  maxWidth: "100%",
  width: "100%",
  height: "40vh",
  overflow: "hidden"
};

class PhotoComponent extends React.Component {
  state = {
    currentImage: this.props.photoImage
  };

  render() {
    return <Picture style={photoStyle} src={this.state.currentImage}></Picture>;
  }
}

export default PhotoComponent;
