import axios from 'axios';
import md5 from 'js-md5';

import {
	USER_AUTH,
	GET_SESSION_ID,
	SET_SESSION_ID,
	DELETE_SESSION_ID
} from '../constants/ActionTypes';

const ROOT_URL = 'http://localhost:5000';

export function userAuth(username, password) {
	const request = axios.post(`${ROOT_URL}/user/auth`, {
		username: username,
		password: md5(password)
	});

	return {
		type: USER_AUTH,
		payload: request
	};
}

export function getSessionId() {
	const sessionId = localStorage.getItem('sessionId');

	return {
		type: GET_SESSION_ID,
		payload: sessionId
	};
}

export function setSessionId(sessionId) {
	localStorage.setItem('sessionId', sessionId);

	return {
		type: SET_SESSION_ID,
		payload: sessionId
	};
}

export function deleteSessionId() {
	return {
		type: DELETE_SESSION_ID,
		payload: null
	};
}