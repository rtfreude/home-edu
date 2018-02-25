import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import * as actions from '../data/actions';

import Landing from '../components/landing/Landing';
import Header from '../components/landing/Header';

import './App.css'

class App extends Component {

  componentDidMount () {
    console.log('didmountprops', this.props)
    this.props.fetchUser();
  }

  render() {
    console.log(actions)
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

export default connect(null, actions)(App);