import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn";
import "../components/css/signUp.css"
import "../pages/css/home.css"
import "../pages/css/home.css";
import logo from "../components/logo.png";

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
        <div className="d-flex flex-column align-items-center">
          <img className="m-3" src={logo} alt="logo" width="130" height="130" />
          <h1
            className=""
            style={{ fontFamily: "sans-serif", fontSize: "15px" }}
          >
            Exploring landmarks, one photo at a time
          </h1>
        </div>
        <br />
        <Modal
          centered
          show={this.state.show === "login"}
          onHide={this.handleClose}
        >
          <ModalHeader closeButton />
          <ModalBody className="body">
            <SignIn childProps={this.props} />
          </ModalBody>
        </Modal>
        <div className="forButton">
          <button class="btn btn-info" onClick={() => this.handleShow("login")}>
            <span>Log In</span>
          </button>
        </div>
        <Modal
          centered
          show={this.state.show == "signup"}
          onHide={this.handleClose}
        >
          <ModalHeader closeButton />
          <ModalBody className="body">
            <SignUp />
          </ModalBody>
        </Modal>
        <div className="forButton">
          <button
            class="btn btn-info"
            onClick={() => this.handleShow("signup")}
          >
            <span>Create Account</span>
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
