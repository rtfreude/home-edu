import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { withRouter } from 'react-router-dom'
import { AuthAction } from '../data/authentication/index';

import Landing from '../components/landing/Landing';
import HeaderContainer from './header/HeaderContainer';
import Calendar from '../containers/calendar/Calendar';
import DailyLesson from '../containers/daily_lesson/DailyLesson';

import './App.css'

class App extends Component {

  componentDidMount () {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='app-container'>
        <BrowserRouter>
          <div>
            <HeaderContainer />
            <Route exact path='/' component={Landing} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/daily_lesson' component={DailyLesson} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, AuthAction)(App);
