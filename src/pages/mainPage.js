import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Avatar from "../components/avatar";
import ImageGalleryComponent from "../components/imageGalleryComponent";
import { Container } from "@material-ui/core";

const galleryContainer = {
  padding: "0",
  height: "80vh",
  width: "95vw",
  overflow: "scroll",
  overflowScrolling: "touch",
  WebkitOverflowScrolling: "touch"
};

const bodyStyle = {
  backgroundColor: "black"
};

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Avatar></Avatar>

        <Container
          maxWidth="sm"
          className="d-flex flex-grow"
          style={galleryContainer}
        >
          <ImageGalleryComponent></ImageGalleryComponent>
        </Container>

        <NavbarComponent></NavbarComponent>
      </div>
    );
  }
}

export default MainPage;
