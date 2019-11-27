import React from "react";
import {
  Media,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import { Picture } from "react-responsive-picture";

const photoStyle = {
  maxWidth: "100%",
  width: "100%",
  height: "100%",
  overflow: "hidden"
};

class PhotoComponent extends React.Component {
  render() {
    return (
      <Picture
        style={photoStyle}
        src="http://jw-next-clone-instagram.s3.amazonaws.com/klcc-outdoor.jpg"
      ></Picture>
    );
  }
}

export default PhotoComponent;
