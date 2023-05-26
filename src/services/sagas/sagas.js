import { getPosts } from "../../utils/api";
import { call, put, takeEvery, all } from "redux-saga/effects";

export const REQUESTED_POSTS = "REQUESTED_POSTS";
export const REQUESTED_POSTS_SUCCESS = "REQUESTED_POSTS_SUCCESS";
export const REQUESTED_POSTS_FAILD = "REQUESTED_POSTS_FAILD";

function* getPostsWorker() {
  try {
    const { data } = yield call(getPosts);
    yield put({ type: REQUESTED_POSTS_SUCCESS, data: data });
  } catch {
    yield put({ type: REQUESTED_POSTS_FAILD });
  }
}

function* getPostsWatcher() {
  yield takeEvery(REQUESTED_POSTS, getPostsWorker);
}

export const rootSaga = function* root() {
  yield all([getPostsWatcher()]);
};
