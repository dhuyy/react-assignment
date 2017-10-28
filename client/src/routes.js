import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './components/App';
import Login from './containers/Login';
import VideoList from './containers/VideoList';
import VideoDetail from './containers/VideoDetail';

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={Login} />
  	<Route path="/videos" component={VideoList} />
  	<Route path="/video/:id" component={VideoDetail} />
  </Route>
);