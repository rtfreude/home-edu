import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header'

class HeaderContainer extends Component {

  render() {
    return (
      < Header
        auth={this.props.AuthReducer}
      />
    )
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer }
}

export default connect(mapStateToProps)(HeaderContainer)
