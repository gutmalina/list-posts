import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILD,
  TEST_REDUX
} from "../actions/actions";

const initialStore = {
  posts: [],
  isPostsRequest: false,
  isPostsFailed: false,
  isPreloader: false,
  isTest: false
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        isPostsRequest: true,
        isPostsFailed: false,
        isPreloader: true,
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.posts,
        isPostsRequest: false,
        isPreloader: false,
      };
    }
    case GET_POSTS_FAILD: {
      return {
        ...state,
        isPostsRequest: false,
        isPostsFailed: true,
        isPreloader: false,
      };
    }
    case TEST_REDUX: {
      return {
        ...state,
        isTest: true
      };
    }
    default:
      return state;
  }
};
