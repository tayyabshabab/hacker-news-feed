import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TOP_STORIES } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getStory(storyID) {
  const getStoryURL = `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`;

  try {
    const story = yield call(request, getStoryURL);
    yield put(reposLoaded(story));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* getTopStories() {
  const topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  try {
    const stories = yield call(request, topStoriesURL);
    for (let i = 0; i <= 10; i += 1) {  // Used For loop because yield doesn't work inside Foreach
      yield call(getStory, stories[i]);
    }
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* hackerNewsData() {
  yield takeLatest(LOAD_TOP_STORIES, getTopStories);
}
