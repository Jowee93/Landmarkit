import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import SignUp from "../components/signUp";
import SignIn from "../components/signIn";
import "../components/css/signUp.css"
import "../pages/css/home.css"

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
      <div className="homeSize">
        <h1>Title</h1>
        <br />
        <img src="#" alt="logo" />
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
          <button
            className="buttonShape"
            onClick={() => this.handleShow("login")}
          >
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
            className="buttonShape"
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
