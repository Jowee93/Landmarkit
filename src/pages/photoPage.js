import React from "react";

import PhotoComponent from "../components/photoComponent";
import { Container, Row, Col } from "reactstrap";
import PhotoBottomNav from "../components/photoBottomNav";

const containerStyle = {
  height: "100%",
  backgroundColor: "black",
  padding: "10vh 0 10vh 0"
};

const bottomContainerStyle = {
  bottom: "0",
  position: "fixed"
};

class PhotoPage extends React.Component {
  state = {
    currentImage: ""
  };

  render() {
    return (
      <div>
        <Container style={containerStyle}>
          <PhotoComponent />
        </Container>
        <Container className="mb-3" style={bottomContainerStyle}>
          <PhotoBottomNav></PhotoBottomNav>
        </Container>
      </div>
    );
  }
}

export default PhotoPage;
