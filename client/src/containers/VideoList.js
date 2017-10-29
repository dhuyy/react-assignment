import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideos, cleanVideos } from '../actions/VideoActions';
import { SPINNER } from '../constants/Images';
import { ROOT_URL } from '../constants/ServerAddress';
import VideoListItem from '../components/VideoListItem';

import '../styles/videoList.scss';

const NUMBER_VIDEOS_TO_LOAD = 10;

class VideoList extends Component {
	componentWillMount() {
		this.props.fetchVideos(localStorage.getItem('sessionId'), this.props.videos.length, NUMBER_VIDEOS_TO_LOAD);
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
      	<div id="video-list-end">
      		<img src={ SPINNER } alt="Videos Loading Spinner" className="spinner hide"/>
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { videos: state.videos.all }
}

export default connect(mapStateToProps, { fetchVideos, cleanVideos })(VideoList);
