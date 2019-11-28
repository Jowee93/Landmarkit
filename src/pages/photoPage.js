import React from "react";
import PhotoComponent from "../components/photoComponent";
import { Container, Row, Col } from "reactstrap";
import PhotoBottomNav from "../components/photoBottomNav";
import NavBarComponent from "../components/NavbarComponent";

const containerStyle = {
  height: "100%",
  backgroundColor: "black",
  padding: "22vh 0 22vh 0"
};

const bottomContainerStyle = {
  bottom: "0",
  position: "fixed"
};

class PhotoPage extends React.Component {
  render() {
    return (
      <div>
        <Container style={containerStyle}>
          <PhotoComponent />
        </Container>
        <Container className="mb-3" style={bottomContainerStyle}>
          <NavBarComponent />
          <PhotoBottomNav></PhotoBottomNav>
        </Container>
      </div>
    );
  }
}

export default PhotoPage;
