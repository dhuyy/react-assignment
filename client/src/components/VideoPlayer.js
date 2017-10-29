import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRating from 'react-star-rating';

import { DEFAULT_THUMB } from '../constants/Images';
import { rateVideo } from '../actions/VideoActions';

import '../styles/videoPlayer.scss';

class VideoPlayer extends Component {
  onRateVideo(event, rateObj) {
  	const data = {
  		videoId: this.props.id,
  		rating: rateObj.rating
  	};

  	this.props.rateVideo(localStorage.getItem('sessionId'), data)
  		.then(response => {
				// TODO Implement then callback
  		})
		;
  }

  render() {
    return (
      <div className="video-player">
      	<video
      		id={this.props.id}
      		src={this.props.url}
      		preload="none"
      		poster={DEFAULT_THUMB}
      		className="video-player-el" controls>
      	</video>
      	<div className="video-info">
      		<p className="video-name">{this.props.name}</p>
      		<div className="video-rating-wrapper">
      			<span className="rating-label">Rating</span>
      			<StarRating
							name="video-rating" 
							totalStars={5}
							size={22}
							onRatingClick={this.onRateVideo.bind(this)}/>
      		</div>
	    		<div className="video-description-wrapper">
	    			<span className="description-label">Description:</span>
	    			<div className="video-description">{this.props.description}</div>
	    		</div>
      	</div>
      </div>
    );
  }
}

export default connect(null, { rateVideo })(VideoPlayer);
