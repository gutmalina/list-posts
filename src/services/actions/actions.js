import { getPosts } from "../../utils/api";

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILD = 'GET_POSTS_FAILD';
export const TEST_REDUX = 'TEST_REDUX'

export const getPostsAction = () => {
  return function (dispatch){
    dispatch({
      type: GET_POSTS
    });
    getPosts()
      .then(res=>{
        if(res.status === 200){
          dispatch({type: GET_POSTS_SUCCESS})
        }else{
          dispatch({type: GET_POSTS_FAILD})
        }
        console.log('action');
      })
      .catch(err=>{
        dispatch({type: GET_POSTS_FAILD})
      })
  }
};

export const testAction = () => ({type: TEST_REDUX})
