import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn";
import "../components/css/signUp.css";
import "../pages/css/home.css";
import "../pages/css/home.css";
import logo from "../components/logo.png";
import logo123 from "../components/logo123.png";

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: null
    };
  }

  handleClose(id) {
    this.setState({ show: id });
  }

  handleShow(id) {
    this.setState({ show: id });
  }

  render() {
    return (
      <div id="signinbackground" className="homeSize">
        <br />
        <div className="d-flex flex-column align-items-center mb-5">
          <img className="" src={logo} alt="logo" width="130" height="130" />
          <h1
            className=""
            style={{
              fontFamily: "Rancho, cursive",
              fontSize: "18px",
              fontWeight: "bold",
              paddingRight: "35px"
            }}
          >
            Exploring landmarks,
          </h1>
          <h1
            className=""
            style={{
              fontFamily: "Rancho, cursive",
              fontSize: "18px",
              fontWeight: "bold",
              paddingLeft: "25px"
            }}
          >
            {/* <img
              style={{
                display: "inline",
                height: "7%",
                width: "7%",
                paddingBottom: "10px"
              }}
              src={logo123}
            ></img> */}
            One photo at a time
          </h1>
        </div>
        <br />
        <Modal
          centered
          show={this.state.show === "login"}
          onHide={this.handleClose}
        >
          <ModalHeader style={{ backgroundColor: "#9ff5ec" }} closeButton />
          <ModalBody className="body">
            <SignIn childProps={this.props} />
          </ModalBody>
        </Modal>
        <Modal
          centered
          show={this.state.show == "signup"}
          onHide={this.handleClose}
        >
          <ModalHeader style={{ backgroundColor: "#9ff5ec" }} closeButton />
          <ModalBody className="body">
            <SignUp />
          </ModalBody>
        </Modal>
        <div>
          <div className="forButton m-3">
            <button
              class="btn btn-info"
              onClick={() => this.handleShow("login")}
            >
              <span>Log In</span>
            </button>
          </div>
          <div className="forButton">
            <button
              class="btn btn-info"
              onClick={() => this.handleShow("signup")}
            >
              <span>Create Account</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
