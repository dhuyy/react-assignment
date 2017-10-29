import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';

import { SPINNER } from '../constants/Images';

class ScrollMonitor extends Component {
  render() {
  	let showSpinner;

  	if (this.props.isFullyInViewport) {
  		this.props.videosLength != 100 ? showSpinner = 'show' : showSpinner = 'hide';
		} else {
			showSpinner = 'hide';
		}

    return (
      <div id="video-list-end">
    		<img src={ SPINNER } alt="Videos Loading Spinner" className={`spinner ${showSpinner}`}/>
    	</div>
    );
  }
}

export default Watch(ScrollMonitor);
