import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  sessionId: AuthReducer
});

export default rootReducer;
