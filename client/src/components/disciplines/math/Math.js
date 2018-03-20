import React, { Component } from 'react';

import Standard from '../../standards/Standard';
import { Panel } from 'react-bootstrap';
//import './math.css'

class Mathematics extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true
    };
  }
  render() {
    return (
      <Standard />
    )
  }
}

export default Mathematics;
