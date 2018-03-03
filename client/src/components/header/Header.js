import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogModal from '../modals/login'

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({showModal: false});
  }

  open() {
    this.setState({showModal: true});
  }

  renderContent() {

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <div>
                <a onClick={this.open}><i className="material-icons right">menu</i>Login</a>
                </div>
               )
      default:
        return (
                <div>
                  <li><Link to='/calendar'>Calendar</Link></li>
                  <li><Link to='/daily_lesson'>Daily Lessons</Link></li>
                  <li><a href="/api/logout">Logout</a></li>
                </div>
                )
    }
  }

  render() {
    return (
      <div>
       <nav className="header-nav">
        <div className="nav-wrapper black">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
            >
            School Day My Way!
          </Link>
          <ul className="right">
              {this.renderContent()}
          </ul>
        </div>
      </nav>
      {
          this.state.showModal
            ? <LogModal
              showModal={this.state.showModal}
              close={this.close}
              open={this.open}
            />
            : null
        }
      </div>
    )
  }
}

export default Header
