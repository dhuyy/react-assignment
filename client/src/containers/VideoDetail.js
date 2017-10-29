import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVideo, fetchVideos } from '../actions/VideoActions';
import { ROOT_URL } from '../constants/ServerAddress';
import VideoPlayer from '../components/VideoPlayer';
import VideoListItem from '../components/VideoListItem';

import '../styles/videoDetail.scss';

class VideoDetail extends Component {
	componentWillMount() {
		this.props.fetchVideo(localStorage.getItem('sessionId'), this.props.params.id);
		this.props.fetchVideos(localStorage.getItem('sessionId'), 0, 5);
	}

	renderSideList() {
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
    const { video } = this.props;

    if (!video) {
      return <div>Loading...</div>
    }

    return (
      <div className="video-detail-page container-fluid">
      	<div className="row">
      		<div className="col-xs-12 col-sm-8">
      			<div className="video-player-wrapper">
      				<VideoPlayer
      					id={video._id}
      					url={`${ROOT_URL}/${video.url}`}
      					name={video.name}
      					description={video.description}
      				/>
      			</div>
      		</div>
      		<div className="col-xs-12 col-sm-4">
      			<hr className="separator visible-xs-block"/>
      			<div className="side-video-list">
      				{this.renderSideList()}
      				<button className="btn bnt-lg btn-default btn-show-more">Show More</button>
      			</div>
      		</div>
      	</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { video: state.videos.current, videos: state.videos.all }
}

export default connect(mapStateToProps, { fetchVideo, fetchVideos })(VideoDetail);
