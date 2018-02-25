import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import './modal.css'

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class LogModal extends Component {

  render() {
    return (
      <Modal.Dialog className="modal">
        <Modal.Header>
          <Modal.Title>Please Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="soc-buttons">
            <a href="/auth/google" className="fa fa-google"></a>
            <a href="/auth/facebook" className="fa fa-facebook"></a>
            <a href="/auth/linkedin" className="fa fa-linkedin"></a>
          </div>
        </Modal.Body>
        <Modal.Footer>
            <Button bsStyle="info" class="customButton" onClick={this.props.close}>Close</Button>
          </Modal.Footer>
      </Modal.Dialog>
    );
  }
};

export default LogModal;