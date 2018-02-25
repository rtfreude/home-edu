import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import LogModal from '../modals/login'

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

  handleHide() {
    this.setState({ showModal: false });
  }

  renderContent() {

    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
                <div>
                <a bsStyle="info" onClick={this.open}><i className="material-icons right">menu</i>Login</a>
                </div>
               )
      default:
        return (
                <div>
                  <li><Link to='/beer'>Search Beer</Link></li>
                  <li><Link to='/breweries'>Search Breweries</Link></li>
                  <li><a href="/api/logout">Logout</a></li>
                </div>
                )
    }
  }

  render() {
    console.log('THIS IS THE PROPS AND STATE')
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
       <nav className="header-nav">
        <div className="nav-wrapper black">
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className="left brand-logo"
            >
            School Day My Way
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
function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)