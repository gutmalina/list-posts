import {
  REQUESTED_POSTS,
  REQUESTED_POSTS_SUCCESS,
  REQUESTED_POSTS_FAILD,
  REQUESTED_USER,
  REQUESTED_USER_SUCCESS,
  REQUESTED_USER_FAILD
} from "../sagas/sagas";

const initialStore = {
  posts: [],
  isPostsSuccess: false,
  isPostsFailed: false,

  user: {},
  isUserSuccess: false,
  isUserFailed: false,

  isPreloader: false,

};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case REQUESTED_POSTS: {
      return {
        ...state,
        isPostsSuccess: false,
        isPostsFailed: false,
        isPreloader: true,
      };
    }
    case REQUESTED_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.data,
        isPostsSuccess: true,
        isPreloader: false,
      };
    }
    case REQUESTED_POSTS_FAILD: {
      return {
        ...state,
        isPostsSuccess: false,
        isPostsFailed: true,
        isPreloader: false,
      };
    }
    case REQUESTED_USER: {
      return {
        ...state,
        isUserSuccess: false,
        isUserFailed: false,
      };
    }
    case REQUESTED_USER_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isUserSuccess: true,
        isUserFailed: false,
      };
    }
    case REQUESTED_USER_FAILD: {
      return {
        ...state,
        isUserSuccess: false,
        isUserFailed: true,
      };
    }
    default:
      return state;
  }
};
