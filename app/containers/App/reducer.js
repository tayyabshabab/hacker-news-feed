import { fromJS, List } from 'immutable';

import {
  LOAD_TOP_STORIES_SUCCESS,
  LOAD_TOP_STORIES,
  LOAD_TOP_STORIES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  stories: List(),
});

function appReducer(state = initialState, action) {
  const stories = state.get('stories');
  switch (action.type) {
    case LOAD_TOP_STORIES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('stories', List());
    case LOAD_TOP_STORIES_SUCCESS:
      return state
        .set('stories', stories.push(action.story))
        .set('loading', false);
    case LOAD_TOP_STORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
