import { FETCH_VIDEOS, FETCH_VIDEO, CLEAN_VIDEOS } from '../constants/ActionTypes';

const defaultState = {
  all: [],
  current: null
};

export default function(state = defaultState, action) {
   switch (action.type) {
    case FETCH_VIDEOS:
      const allVideos = state.all.concat(action.payload.data.data);

      return { ...state, all: allVideos };

    case FETCH_VIDEO:
      return { ...state, current: action.payload.data.data };

    case CLEAN_VIDEOS:
      return { ...state, all: action.payload };

    default:
      return state;
  }
}
