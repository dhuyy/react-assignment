import axios from 'axios';

import { FETCH_VIDEOS } from '../constants/ActionTypes';

const ROOT_URL = 'http://localhost:5000';

export function fetchVideos(sessionId, skip, limit) {
	const request = axios.get(`${ROOT_URL}/videos?sessionId=${sessionId}&skip=${skip}&limit=${limit}`);

	return {
		type: FETCH_VIDEOS,
		payload: request
	};
}