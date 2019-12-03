import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import AvatarOthers from "../components/avatarOthers";
import ImageGalleryComponentOthers from "../components/imageGalleryComponentOthers";
import { Container } from "@material-ui/core";

const galleryContainer = {
  padding: "0",
  height: "80vh",
  width: "95vw",
  overflow: "scroll",
  overflowScrolling: "touch",
  WebkitOverflowScrolling: "touch"
};

class MainPageOthers extends React.Component {
  render() {
    return (
      <div>
        <AvatarOthers></AvatarOthers>

        <Container maxWidth="sm" style={galleryContainer}>
          <ImageGalleryComponentOthers></ImageGalleryComponentOthers>
        </Container>

        <NavbarComponent></NavbarComponent>
      </div>
    );
  }
}

export default MainPageOthers;
