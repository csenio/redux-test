import { FETCH_POSTS, NEW_POST } from "./types";
import { backend } from "../config.json";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};
