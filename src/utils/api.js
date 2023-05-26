import { BASE_URL } from "./config";
import axios from 'axios';

export const getPosts = () => {
  return axios
    .get(`${BASE_URL}/posts`)
    .then(res=> res)
    .catch(err=>err)
  ;
}

export const getComments = (postId) => {
  return axios
    .get(`${BASE_URL}/comments?postId=${postId}`)
    .then(res=> res)
    .catch(err=>err)
  ;
}

export const getUsers = () => {
  return axios
    .get(`${BASE_URL}/users`)
    .then(res=> res)
    .catch(err=>err)
  ;
}

