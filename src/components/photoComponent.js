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
  overflow: "hidden",
  borderTopLeftRadius: "5%",
  borderTopRightRadius: "5%",
  borderBottomLeftRadius: "5%",
  borderBottomRightRadius: "5%"
};

class PhotoComponent extends React.Component {
  render() {
    return (
      <Card
        className="shadow"
        style={{
          position: "relative",
          width: "100vw",
          height: "70vh",
          borderTopLeftRadius: "5%",
          borderTopRightRadius: "5%",
          borderBottomLeftRadius: "5%",
          borderBottomRightRadius: "5%"
        }}
      >
        <Picture
          style={photoStyle}
          src="http://jw-next-clone-instagram.s3.amazonaws.com/klcc-outdoor.jpg"
        ></Picture>
      </Card>
    );
  }
}

export default PhotoComponent;
