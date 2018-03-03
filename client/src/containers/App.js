import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { AuthAction } from '../data/authentication/index';

import Landing from '../components/landing/Landing';
import HeaderContainer from './header/HeaderContainer';
import Calendar from '../containers/calendar/CalendarContainer';
import DailyLessonContainer from '../containers/dailyLesson/DailyLessonContainer';

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
            <Route exact path='/daily_lesson' component={DailyLessonContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, AuthAction)(App);
