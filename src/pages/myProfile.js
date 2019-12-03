import React from "react";
import { Container, Row, Col } from "reactstrap";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import Button from "@material-ui/core/Button";
import NavbarComponent from "../components/NavbarComponent";
import ninja_avatar from "../components/ninja_avatar.png";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Slide from "@material-ui/core/Slide";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Loader from "../components/LoadingPage";

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
    currentImage: "",
    editmode: false,
    andchorEl: null,
    transition: false,
    // isLoading: true
  };

  // API to retrieve user details from database
  componentDidMount() {
    let JWT = localStorage.getItem("userToken");
    axios({
      method: "GET",
      url: "https://lamppost.herokuapp.com/api/v1/users/me",
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(result => {
        console.log("Get User Profile axios called:");
        console.log(result.data);
        this.setState({
          profile: result.data,
          username: result.data.username,
          email: result.data.email,
          description: result.data.description,
          currentImage: result.data.profileImage
          profileImage: result.data.profileImage,
          // isLoading: false
        });
      })
      .catch(error => {
        console.log(error.response);
      });

    setTimeout(() => {
      this.setState({
        transition: true
      });
    }, 0.1);
  }

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

  handleUpload = e => {
    this.setState({
      profileImage: e.target.files[0]
    });
    console.log(this.state.profileImage);
  };

  handleProfileImage = e => {
    e.preventDefault();
    e.persist();

    let JWT = localStorage.getItem("userToken");

    let formData = new FormData();

    formData.append("profileImage", this.state.profileImage);

    axios({
      method: "POST",
      url: "https://lamppost.herokuapp.com/api/v1/users/me/edit/picture",
      data: formData,
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleSubmit = async e => {
    let JWT = localStorage.getItem("userToken");
    const { username, email, description } = this.state;

    e.preventDefault();
    e.persist();

    await axios({
      method: "POST",
      url: "https://lamppost.herokuapp.com/api/v1/users/me/edit",
      data: { username, email, description },
      headers: { Authorization: `Bearer ${JWT}` }
    })
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("userToken");

    this.props.history.push({
      pathname: "/"
    });
  };

  linkToSearch = () => {
    this.props.history.push({
      pathname: "/search"
    });
  };

  render() {
    // if (this.state.isLoading) {
    //   return <Loader />;
    // }
    return (
      <Fade in={this.state.transition}>
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
                  <IconButton onClick={this.linkToSearch}>
                    <PersonAddIcon />
                  </IconButton>

                  <div>
                    <img
                      style={profilePicStyle}
                      src={this.state.currentImage}
                      alt="profileImage"
                    ></img>
                    <p>@{this.state.username}</p>
                    <p>"{this.state.description}"</p>
                  </div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                  >
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
                  </Menu>
                </Row>
                <form
                  onSubmit={this.handleSubmit}
                  className="d-flex flex-column"
                >
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
                    rowmax="4"
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
                <form onSubmit={this.handleProfileImage}>
                  <input
                    type="file"
                    name="profileImage"
                    onChange={this.handleUpload}
                  ></input>
                  <button type="submit">upload profile image</button>
                </form>
              </Col>
            </Row>
          </Container>

          <NavbarComponent></NavbarComponent>
        </div>
      </Fade>
    );
  }
}

export default MyProfile;
