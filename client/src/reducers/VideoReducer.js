import { FETCH_VIDEOS } from '../constants/ActionTypes';

const defaultState = {
  all: [],
  current: null
};

export default function(state = defaultState, action) {
   switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, all: action.payload.data.data };

    default:
      return state;
  }
}
