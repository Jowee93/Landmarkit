import React from "react";
import { Picture } from "react-responsive-picture";
import axios from "axios";

const photoStyle = {
  maxWidth: "100%",
  width: "100%",
  height: "40vh",
  overflow: "hidden"
};

class PhotoComponent extends React.Component {
  // state = {
  //   currentImage: this.props.photoImage,
  //   image_id: this.props.image_id,

  // };

  render() {
    return (
      <>
        <Picture style={photoStyle} src={this.props.image.url}></Picture>;
        <p style={{ color: "white" }} className="mt-3">
          {this.props.image.name}
        </p>
      </>
    );
  }
}

export default PhotoComponent;
