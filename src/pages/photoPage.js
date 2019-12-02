import React from "react";
import PhotoComponent from "../components/photoComponent";
import { Container } from "reactstrap";
import PhotoBottomNav from "../components/photoBottomNav";
import NavBarComponent from "../components/NavbarComponent";
import TopBackNav from "../components/topBackNav";
import axios from "axios";

const containerStyle = {
  height: "100%",
  backgroundColor: "black",
  padding: "22vh 0 22vh 0"
};

class PhotoPage extends React.Component {
  state = {
    // currentImage: this.props.location.state.currentImage,
    // description: this.props.location.state.description
    image_id: this.props.match.params.id,
    image: ""
  };

  async componentDidMount() {
    await axios({
      method: "GET",
      url: `https://lamppost.herokuapp.com/api/v1/images/${this.props.match.params.id}`
    }).then(response => {
      console.log("Get Specific Image axios called:");
      console.log(response.data);

      this.setState({
        image: response.data
      });
    });
  }

  render() {
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
        <div style={{ position: "absolute", bottom: "20vh" }}>
          <PhotoBottomNav
            image={this.state.image}
            image_id={this.state.image_id}
          ></PhotoBottomNav>
        </div>

        <NavBarComponent />
      </div>
    );
  }
}

export default PhotoPage;
