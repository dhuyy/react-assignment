import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import AuthReducer from './AuthReducer';
import VideoReducer from './VideoReducer';

const rootReducer = combineReducers({
  sessionId: AuthReducer,
  videos: VideoReducer,
  toastr: toastrReducer
});

export default rootReducer;
