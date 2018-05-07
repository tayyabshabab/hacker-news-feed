import {
  LOAD_TOP_STORIES,
  LOAD_TOP_STORIES_SUCCESS,
  LOAD_TOP_STORIES_ERROR,
} from './constants';

export function loadTopStories() {
  return {
    type: LOAD_TOP_STORIES,
  };
}

export function reposLoaded(story) {
  return {
    type: LOAD_TOP_STORIES_SUCCESS,
    story,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_TOP_STORIES_ERROR,
    error,
  };
}
