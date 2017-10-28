import React, { Component } from 'react';
import { Link } from 'react-router';
import { HEADER_LOGO } from '../constants/Images';

class Navbar extends Component {
  componentWillMount() {
    //localStorage.setItem('sessionId', '93284792834');

    this.state = {
      sessionId: localStorage.getItem('sessionId')
    }
  }

  logout(event) {
    event.preventDefault();

    localStorage.removeItem('sessionId');

    this.setState({ sessionId: null })
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
      				<Link to="/videoList" className="navbar-brand">
      					<img src={ HEADER_LOGO } alt="Crossover"/>
      				</Link>
      			</div>
      			<div className="collapse navbar-collapse" id="navbar-collapse">
      				<ul className="nav navbar-nav navbar-right">
      					<li className={ this.state.sessionId ? 'hide' : '' }>
      						<Link to="/">
		      					<i className="fa fa-sign-in" aria-hidden="true"></i> Login
		      				</Link>
      					</li>
      					<li className={ this.state.sessionId ? '' : 'hide' }>
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

export default Navbar;
