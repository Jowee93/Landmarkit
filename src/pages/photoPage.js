import React from "react";
import PhotoComponent from "../components/photoComponent";
import { Container } from "reactstrap";
import PhotoBottomNav from "../components/photoBottomNav";
import NavbarComponent from "../components/NavbarComponent";
import TopBackNav from "../components/topBackNav";
import axios from "axios";
import Avatar from "../components/avatar";
import Loader from "../components/LoadingPage";

const containerStyle = {
  height: "100%",
  backgroundColor: "black",
  padding: "22vh 0 22vh 0",
  margin: "0 0 0 0",
  width: "100%"
};

class PhotoPage extends React.Component {
  state = {
    // currentImage: this.props.location.state.currentImage,
    // description: this.props.location.state.description
    image_id: this.props.match.params.id,
    image: "",
    isLoading: false
  };

  async componentDidMount() {
    await axios({
      method: "GET",
      url: `https://lamppost.herokuapp.com/api/v1/images/${this.props.match.params.id}`
    }).then(response => {
      console.log("Get Specific Image axios called:");
      console.log(response.data);

      this.setState({
        image: response.data,
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <Avatar></Avatar>
          <Loader />
          <NavbarComponent></NavbarComponent>
        </>
      );
    }
    return (
      <div>
        <TopBackNav></TopBackNav>
        <Container style={containerStyle}>
          <PhotoComponent
            // photoImage={this.state.currentImage}
            image_id={this.state.image_id}
            image={this.state.image}
          />
        </Container>
        <div style={{ position: "relative", bottom: "20vh" }}>
          <PhotoBottomNav
            image={this.state.image}
            image_id={this.state.image_id}
          ></PhotoBottomNav>
        </div>

        <NavbarComponent />
      </div>
    );
  }
}

export default PhotoPage;
