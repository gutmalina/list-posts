import {
  REQUESTED_POSTS,
  REQUESTED_POSTS_SUCCESS,
  REQUESTED_POSTS_FAILD,
  REQUESTED_USER,
  REQUESTED_USER_SUCCESS,
  REQUESTED_USER_FAILD,
  REQUESTED_COMMENTS,
  REQUESTED_COMMENTS_SUCCESS,
  REQUESTED_COMMENTS_FAILD,
  DELETE_COMMENTS,
  DELETE_COMMENTS_SUCCESS,
} from "../constants";

/** action Posts */
export function requestPostsAction() {
  return { type: REQUESTED_POSTS };
}

export function requestPostsSuccessAction(data) {
  return { type: REQUESTED_POSTS_SUCCESS, data: data };
}

export function requestPostsErrorAction() {
  return { type: REQUESTED_POSTS_FAILD };
}

/** action User */
export function requestUserAction(id) {
  return { type: REQUESTED_USER, userId: id };
}

export function requestUserSuccessAction(data) {
  return { type: REQUESTED_USER_SUCCESS, data: data };
}

export function requestUserErrorAction() {
  return { type: REQUESTED_USER_FAILD };
}

/** action Comments */
export function requestCommentsAction(id) {
  return { type: REQUESTED_COMMENTS, postId: id };
}

export function requestCommentsSuccessAction(data) {
  return { type: REQUESTED_COMMENTS_SUCCESS, data: data };
}

export function requestCommentsErrorAction() {
  return { type: REQUESTED_COMMENTS_FAILD };
}

/** action DeleteComments */
export function deleteCommentsAction(id) {
  return { type: DELETE_COMMENTS, postId: id  };
}

export function deleteCommentsSuccessAction(data) {
  return { type: DELETE_COMMENTS_SUCCESS, data: data };
}
