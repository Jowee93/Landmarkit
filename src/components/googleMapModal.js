import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import Bootstrap from "react-bootstrap";
import GoogleMapComponent from "./googleMapComponent";

class FunModal extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <div>
        <Button variant="info" size="sm" onClick={this.handleShow}>
          Fun Facts
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>Location</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <h4>Title</h4>
            <GoogleMapComponent></GoogleMapComponent>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FunModal;
