import { GET_SESSION_ID, SET_SESSION_ID, DELETE_SESSION_ID } from '../constants/ActionTypes';

export default function(state = null, action) {
   switch (action.type) {
    case GET_SESSION_ID:
      return action.payload;

    case SET_SESSION_ID:
      return action.payload;

    case DELETE_SESSION_ID:
      return action.payload;

    default:
      return state;
  }
}
