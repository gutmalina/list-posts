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
  DELETE_COMMENTS_SUCCESS
} from "../constants";

const initialStore = {
  posts: [],
  isPostsSuccess: false,
  isPostsFailed: false,

  user: [],
  isUserSuccess: false,
  isUserFailed: false,

  comments: [],
  isCommentsSuccess: false,
  isCommentsFailed: false,

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
        isPreloader: true,
      };
    }
    case REQUESTED_USER_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isUserSuccess: true,
        isUserFailed: false,
        isPreloader: false,
      };
    }
    case REQUESTED_USER_FAILD: {
      return {
        ...state,
        isUserSuccess: false,
        isUserFailed: true,
        isPreloader: false,
      };
    }
    case REQUESTED_COMMENTS: {
      return {
        ...state,
        isCommentsSuccess: false,
        isCommentsFailed: false,
      };
    }
    case REQUESTED_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: [...state.comments.concat(action.data)],
        isCommentsSuccess: true,
        isCommentsFailed: false,
      };
    }
    case REQUESTED_COMMENTS_FAILD: {
      return {
        ...state,
        isCommentsSuccess: false,
        isCommentsFailed: true,
      };
    }
    case DELETE_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: [...state.comments.filter((item)=> item.postId !== action.data)]
      };
    }
    default:
      return state;
  }
};
