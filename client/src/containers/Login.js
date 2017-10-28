import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AVATAR } from '../constants/Images';
import { userAuth, setSessionId } from '../actions/AuthActions';

import '../styles/login.scss';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.auth = this.auth.bind(this);
	}

	auth(event) {
		event.preventDefault();

		this.props.userAuth(this.state.username, this.state.password)
			.then(response => {
				this.props.setSessionId(response.payload.data.sessionId);

        this.context.router.push('/videos');
			})
			.catch(error => {
				// TODO Implement error callback
				console.log(error);
			})
		;

    this.setState({
    	username: '',
    	password: ''
    })
	}

  render() {
    return (
      <div className="login-page">
      	<div className="account-wall">
      		<img className="profile-img" src={ AVATAR } alt="User Picture"/>
      		<form className="form-login" onSubmit={this.auth}>
      			<input type="text"
	      			value={this.state.username}
	      			onChange={ event => this.setState({ username: event.target.value }) }
	      			className="form-control"
	      			placeholder="Username" required autofocus/>
      			<input type="password"
      				value={this.state.password}
      				onChange={ event => this.setState({ password: event.target.value }) }
      				className="form-control"
      				placeholder="Password" required/>
      			<input type="submit" className="btn btn-lg btn-info btn-block btn-login" value="Sign In"/>
      		</form>
      	</div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object
};

export default connect(null, { userAuth, setSessionId })(Login);
