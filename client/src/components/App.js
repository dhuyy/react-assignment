import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';

import Navbar from '../containers/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
      	<ReduxToastr />
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
