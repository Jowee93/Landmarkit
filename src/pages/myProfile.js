import React from "react";
import { Container, Row, Col } from "reactstrap";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import NavbarComponent from "../components/NavbarComponent";
import ninja_avatar from "../components/ninja_avatar.png";

const profilePicStyle = {
  borderRadius: "50%",
  width: "30vw",
  bottom: "10px",
  position: "relative",
  bottom: "5vh",
  display: "block"
};

const bodyStyle = {
  height: "75vh",
  borderTopLeftRadius: "10%",
  borderTopRightRadius: "10%",
  backgroundColor: "white"
};

class MyProfile extends React.Component {
  state = {
    currentImage: ""
  };

  render() {
    return (
      <div>
        <Container id="follower_following_wrapper">
          <Row
            style={{
              background: "turquoise",
              height: "20vh",
              marginBottom: "-5vh"
            }}
          >
            <Col className="d-flex justify-content-between m-3">
              <span>
                0 <br /> FOLLOWERS
              </span>
              <span>
                0 <br /> FOLLOWING
              </span>
            </Col>
          </Row>
        </Container>

        <Container
          id="addperson_profilePic_settings_wrapper"
          style={{ position: "relative", bottom: "3vh", zIndex: "10" }}
        >
          <Row>
            <Col className="shadow" style={bodyStyle}>
              <Row className="d-flex justify-content-between align-items-center ml-3 mr-3 mb-3">
                <PersonAddIcon />

                <div className="">
                  <img style={profilePicStyle} src={ninja_avatar}></img>
                  <p>@JoWee</p>
                </div>

                <SettingsIcon />
              </Row>
              <Button variant="outlined" color="secondary">
                Edit Profile
              </Button>
            </Col>
          </Row>
        </Container>
        <NavbarComponent></NavbarComponent>
      </div>
    );
  }
}

export default MyProfile;
