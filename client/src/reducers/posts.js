// reducer takes in context state and action.
// state (posts) default value cannot be null, set initial to an empty array.

import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from "../constants/actionTypes";

export default (state = [], action) => {
  // compare action.type, do stuff, and then return the state after action has been applied.
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      // spread all posts in state, then add new post to array.
      return [...state, action.payload];

    case LIKE:
    case UPDATE:
      return state.map((post) => post._id === action.payload._id ? action.payload : post);
      /* Check if post._id matches action.payload._id, if true, map over origin
      'post' array(state), update the data, then return newly updated action.payload.
      Otherwise, return original post.
      */

    case DELETE:
      return state.filter((post) => post._id !== action.payload);

    default:
      return state;
  }
};
