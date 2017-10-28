import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { HEADER_LOGO } from '../constants/Images';
import { getSessionId, deleteSessionId } from '../actions/AuthActions'

import '../styles/navbar.scss';

class Navbar extends Component {
  componentWillMount() {
    this.props.getSessionId()
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('sessionId');

    this.props.deleteSessionId();
    this.context.router.push('/');
  }

  render() {
    return (
      <div className="container-fluid">
      	<div className="row">
      		<nav className="navbar navbar-default crossover-navbar">
      			<div className="navbar-header">
      				<button type="button"  className="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar-collapse" aria-expanded="false">
              	<span className="sr-only">Toggle navigation</span>
              	<span className="icon-bar"></span>
              	<span className="icon-bar"></span>
              	<span className="icon-bar"></span>
      				</button>
      				<Link to="/videos" className="navbar-brand">
      					<img src={ HEADER_LOGO } alt="Crossover"/>
      				</Link>
      			</div>
      			<div className="collapse navbar-collapse" id="navbar-collapse">
      				<ul className="nav navbar-nav navbar-right">
      					<li className={ this.props.sessionId ? 'hide' : '' }>
      						<Link to="/">
		      					<i className="fa fa-sign-in" aria-hidden="true"></i> Login
		      				</Link>
      					</li>
      					<li className={ this.props.sessionId ? '' : 'hide' }>
      						<a href="" onClick={this.logout.bind(this)}>
      							<i className="fa fa-sign-out" aria-hidden="true"></i> Logout
      						</a>
      					</li>
      				</ul>
      			</div>
      		</nav>
      	</div>
      </div>
    );
  }
}

Navbar.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return { sessionId: state.sessionId };
}

export default connect(mapStateToProps, { getSessionId, deleteSessionId })(Navbar);
