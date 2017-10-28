import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import VideoReducer from './VideoReducer';

const rootReducer = combineReducers({
  sessionId: AuthReducer,
  videos: VideoReducer
});

export default rootReducer;
