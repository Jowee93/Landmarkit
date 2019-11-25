import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalHeader from "react-bootstrap/ModalHeader";
import Bootstrap from "react-bootstrap";

class FunModal extends Component {
  constructor(props){
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    }
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
                <ModalTitle>
                    Modal Heading
                </ModalTitle>
              </ModalHeader>
              <ModalBody>
                <h4>Title</h4>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur sodales ligula in
                  libero. Sed dignissim lacinia nunc. Curabitur tortor.
                  Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                  Maecenas mattis. Sed convallis tristique sem. Proin ut ligula
                  vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
                  suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
                  lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper
                  vel, tincidunt sed, euismod in, nibh.{" "}
                </p>
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
