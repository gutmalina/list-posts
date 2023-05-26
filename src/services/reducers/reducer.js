import {
  REQUESTED_POSTS,
  REQUESTED_POSTS_SUCCESS,
  REQUESTED_POSTS_FAILD,
} from "../sagas/sagas";

const initialStore = {
  posts: [],
  isPostsSuccess: false,
  isPostsFailed: false,
  isPreloader: false,
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case REQUESTED_POSTS: {
      return {
        ...state,
        isPostsSuccess: true,
        isPostsFailed: false,
        isPreloader: true,
      };
    }
    case REQUESTED_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.data,
        isPostsSuccess: false,
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
    default:
      return state;
  }
};
