import axios from 'axios';

import { FETCH_VIDEOS, FETCH_VIDEO, RATE_VIDEO, CLEAN_VIDEOS } from '../constants/ActionTypes';
import { ROOT_URL } from '../constants/ServerAddress';

export function fetchVideos(sessionId, skip, limit) {
	const request = axios.get(`${ROOT_URL}/videos?sessionId=${sessionId}&skip=${skip}&limit=${limit}`);

	return {
		type: FETCH_VIDEOS,
		payload: request
	};
}

export function fetchVideo(sessionId, videoId) {
	const request = axios.get(`${ROOT_URL}/video?sessionId=${sessionId}&videoId=${videoId}`);

	return {
		type: FETCH_VIDEO,
		payload: request
	};
}

export function rateVideo(sessionId, data) {
	const request = axios.post(`${ROOT_URL}/video/ratings?sessionId=${sessionId}`, data);

	return {
		type: RATE_VIDEO,
		payload: request
	};
}

export function cleanVideos() {
	return {
		type: CLEAN_VIDEOS,
		payload: []
	};
}