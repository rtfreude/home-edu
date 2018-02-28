import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import { AuthAction } from '../data/authentication/index';

import Landing from '../components/landing/Landing';
import Header from './header/Header';

import './App.css'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  render() {
    console.log(AuthAction)
    return (
      <div className='app-container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, AuthAction)(App);
