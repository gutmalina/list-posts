import { getComments, getPosts, getUser } from "../../utils/api";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  requestPostsSuccessAction,
  requestPostsErrorAction,
  requestUserSuccessAction,
  requestUserErrorAction,
  requestCommentsSuccessAction,
  requestCommentsErrorAction,
  deleteCommentsSuccessAction,
} from "../actions/action";

import {
  REQUESTED_POSTS,
  REQUESTED_USER,
  REQUESTED_COMMENTS,
  DELETE_COMMENTS,
} from "../constants";

/** получить все посты */
function* getPostsWorker() {
  try {
    const { data } = yield call(getPosts);
    yield put(requestPostsSuccessAction(data));
  } catch (err) {
    yield put(requestPostsErrorAction());
  }
}

function* getPostsWatcher() {
  yield takeEvery(REQUESTED_POSTS, getPostsWorker);
}

/** получить данные пользователя */
function* getUserWorker(action) {
  try {
    const { data } = yield call(getUser, action.userId);
    yield put(requestUserSuccessAction(data));
  } catch (err) {
    yield put(requestUserErrorAction());
  }
}

function* getUserWatcher() {
  yield takeEvery(REQUESTED_USER, getUserWorker);
}

/** получить комментарии к посту */
function* getCommentsWorker(action) {
  try {
    const { data } = yield call(getComments, action.postId);
    yield put(requestCommentsSuccessAction(data));
  } catch (err) {
    yield put(requestCommentsErrorAction);
  }
}

function* getCommentsWatcher() {
  yield takeEvery(REQUESTED_COMMENTS, getCommentsWorker);
}

/** удалить комментарии к посту */
function* deleteCommentsWorker(action) {
  yield put(deleteCommentsSuccessAction(action.postId));
}

function* deleteCommentsWatcher() {
  yield takeEvery(DELETE_COMMENTS, deleteCommentsWorker);
}

export const rootSaga = function* root() {
  yield all([
    getPostsWatcher(),
    getUserWatcher(),
    getCommentsWatcher(),
    deleteCommentsWatcher(),
  ]);
};
