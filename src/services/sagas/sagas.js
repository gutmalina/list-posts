import { getPosts, getUser } from "../../utils/api";
import { call, put, takeEvery, all, take } from "redux-saga/effects";

export const REQUESTED_POSTS = "REQUESTED_POSTS";
export const REQUESTED_POSTS_SUCCESS = "REQUESTED_POSTS_SUCCESS";
export const REQUESTED_POSTS_FAILD = "REQUESTED_POSTS_FAILD";

export const REQUESTED_USER = "REQUESTED_USER";
export const REQUESTED_USER_SUCCESS = "REQUESTED_USER_SUCCESS";
export const REQUESTED_USER_FAILD = "REQUESTED_USER_FAILD";

/** получить все посты */
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

/** получить данные пользователя */
function* getUserWorker() {
  const action = yield take(REQUESTED_USER);

  try {
    const { data } = yield call(getUser, action.payload.userId);
    yield put({ type: REQUESTED_USER_SUCCESS, data: data });
  } catch {
    yield put({ type: REQUESTED_USER_FAILD });
  }
}

function* getUserWatcher() {
  yield takeEvery(REQUESTED_USER, getUserWorker);
}


export const rootSaga = function* root() {
  yield all([getPostsWatcher(), getUserWatcher()]);
};
