import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos, cleanVideos } from '../actions/VideoActions';
import { ROOT_URL } from '../constants/ServerAddress';
import VideoListItem from '../components/VideoListItem';
import ScrollMonitor from '../components/ScrollMonitor';

import '../styles/videoList.scss';

const NUMBER_VIDEOS_TO_LOAD = 10;
let canFetchNewVideos = true;

class VideoList extends Component {
	componentWillMount() {
		this.props.fetchVideos(localStorage.getItem('sessionId'), this.props.videos.length, NUMBER_VIDEOS_TO_LOAD);
	}

	componentDidUpdate() {
		const list = document.getElementsByTagName('video');

		for (var item of list) {
			item.onplay = function(event) {
				for (var video of list) {
	        if (video.id != event.target.id)
        		video.pause();
				}
			}
		}
	}

	componentWillUnmount() {
		this.props.cleanVideos();
	}

	renderVideos() {
		return this.props.videos.map(video => {
			return(
				<div key={video._id} className="video-wrapper">
					<VideoListItem
						videoId={video._id}
		        name={video.name}
		        description={video.description}
		        url={`${ROOT_URL}/${video.url}`}
		        ratings={video.ratings}>
					></VideoListItem>
    		</div>
			);
		});
	}

	hitTheEnd() {
		if (this.props.videos.length < 101) {
			if (canFetchNewVideos) {
      	this.props.fetchVideos(localStorage.getItem('sessionId'), this.props.videos.length, NUMBER_VIDEOS_TO_LOAD)
      		.then(response => {
      			canFetchNewVideos = true;
      		})
    		;

      	canFetchNewVideos = false;
			}
    }
	}

  render() {
    const { videos } = this.props;

    if (!videos) {
      return <div>Loading...</div>
    }

    return (
      <div className="video-list-page">
      	<div className="video-list">
      		{this.renderVideos()}
      	</div>
      	<ScrollMonitor stateChange={this.hitTheEnd.bind(this)} videosLength={this.props.videos.length} />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { videos: state.videos.all }
}

export default connect(mapStateToProps, { fetchVideos, cleanVideos })(VideoList);
