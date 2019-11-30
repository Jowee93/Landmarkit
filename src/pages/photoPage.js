import React from "react";
import PhotoComponent from "../components/photoComponent";
import { Container, Row, Col } from "reactstrap";
import PhotoBottomNav from "../components/photoBottomNav";
import NavBarComponent from "../components/NavbarComponent";
import TopBackNav from "../components/topBackNav";

const containerStyle = {
  height: "100%",
  backgroundColor: "black",
  padding: "22vh 0 22vh 0"
};

const bottomContainerStyle = {};

class PhotoPage extends React.Component {
  state = {
    currentImage: this.props.location.state.currentImage,
    description: this.props.location.state.description
  };

  render() {
    return (
      <div>
        <TopBackNav></TopBackNav>
        <Container style={containerStyle}>
          <PhotoComponent photoImage={this.state.currentImage} />
          <p className="mt-3">{this.state.description.name}</p>
        </Container>
        <div style={{ position: "absolute", bottom: "20vh" }}>
          <PhotoBottomNav
            photodescription={this.state.description}
          ></PhotoBottomNav>
        </div>

        <NavBarComponent />
      </div>
    );
  }
}

export default PhotoPage;
