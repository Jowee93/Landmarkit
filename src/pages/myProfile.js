import React from "react";
import { Container, Row, Col } from "reactstrap";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import NavbarComponent from "../components/NavbarComponent";
import ninja_avatar from "../components/ninja_avatar.png";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

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
    profile: [],
    username: "",
    email: "",
    description: "",
    profileImage: "",
    editmode: false
  };

  // API to retrieve user details from database
  // componentDidMount() {
  //   let JWT = localStorage.getItem("userToken");
  //   axios({
  //     method: "GET",
  //     url: "<PUT URL TO FLASK BACKEND [users/me]>",
  //     headers: { Authorization: `Bearer ${JWT}` }
  //   })
  //     .then(result => {
  //       this.setState({
  //         profile: result,
  //         username: result.username,
  //         email: result.email,
  //         description: result.description,
  //         profileImage: result.profileImage
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error.response);
  //     });
  // }

  edit = () => {
    this.setState({
      editmode: this.state.editmode ? false : true
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    const { username, password, description } = this.state;
    e.preventDefault();
    e.persist();

    await axios({
      method: "POST",
      url: "<PUT IN URL TO UPDATE PROFILE>",
      data: { username, password, description }
    })
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error.response);
      });
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

                <div>
                  <img style={profilePicStyle} src={ninja_avatar}></img>
                  <p>@JoWee</p>
                  <p>"Ninja Shuriken !"</p>
                </div>

                <SettingsIcon />
              </Row>
              <form onSubmit={this.handleSubmit} className="d-flex flex-column">
                <TextField
                  disabled={this.state.editmode ? false : true}
                  name="username"
                  className="m-3"
                  label="Username"
                  variant="outlined"
                  color="secondary"
                  value={this.state.username}
                  onChange={this.handleChange}
                ></TextField>
                <TextField
                  disabled={this.state.editmode ? false : true}
                  name="email"
                  className="m-3"
                  label="Email"
                  variant="outlined"
                  color="secondary"
                  value={this.state.email}
                  onChange={this.handleChange}
                ></TextField>
                <TextField
                  disabled={this.state.editmode ? false : true}
                  name="description"
                  className="m-3"
                  id="outlined-multiline-static"
                  label="Biography"
                  rowMax="4"
                  variant="outlined"
                  color="secondary"
                  value={this.state.description}
                  onChange={this.handleChange}
                  multiline
                />
                <div className="">
                  <button
                    style={
                      this.state.editmode
                        ? { display: "block" }
                        : { display: "none" }
                    }
                    className="btn btn-outline-info mx-auto mb-3"
                  >
                    SUBMIT CHANGES
                  </button>
                  <Button
                    className="d-block mx-auto"
                    onClick={this.edit}
                    variant="outlined"
                    color="secondary"
                  >
                    {this.state.editmode ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
        <NavbarComponent></NavbarComponent>
      </div>
    );
  }
}

export default MyProfile;
