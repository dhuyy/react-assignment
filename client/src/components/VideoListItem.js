import React, { Component, PropTypes } from 'react';
import StarRating from 'react-star-rating';
import { DEFAULT_THUMB_SMALL } from '../constants/Images';

import '../styles/videoListItem.scss';

class VideoListItem extends Component {
	constructor(props) {
		super(props)

		this.onClickVideo = this.onClickVideo.bind(this);
	}

	round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;

    return Math.round(value * inv) / inv;
  }

	average(array) {
    var sum = array.reduce(function(total, num) {
      return total + num;
    });

    return sum / array.length;
  }

	getVideoRating() {
		return this.round(this.average(this.props.ratings), 1)
	}

	onClickVideo(event) {
    event.preventDefault();
    
    this.context.router.push(`/video/${this.props.videoId}`);
	}
	
  render() {
    return (
      <div className="video-list-item">
      	<video
			    id={this.props.videoId}
			    src={this.props.url}
			    preload="none"
			    poster={DEFAULT_THUMB_SMALL}
			    className="video-block-el" controls>
			  </video>
			  <div className="video-info">
			  	<p className="video-name" onClick={this.onClickVideo}>{this.props.name}</p>
			  	<div className="video-rating-wrapper">
			  		<div className="rating-label">Rating:</div>
						<StarRating
							name="video-rating" 
							totalStars={5}
							rating={this.getVideoRating()}
							disabled={true}
							size={15}/>
			  	</div>
			  	<div className="video-description">
			  		{this.props.description.substring(0, 85).concat('...')}
			  		<a href="" onClick={this.onClickVideo}>Read more</a>
			  	</div>
			  </div>
      </div>
    );
  }
}

VideoListItem.contextTypes = {
  router: PropTypes.object
};

export default VideoListItem;
