import * as api from "../api";

//------------------- Action Creators -------------------//
// since asyncronous logic is being used to fetch data, 
// react-thunk requires additional arrow function to dispatch

export const getPosts = () => async (dispatch) => {
  try {
    // try to fetch all post data from api
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
  // specify type of action and payload data.
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  // request api for updatePost, passing currentId and postData.
  // should return updated memory of post
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type: 'DELETE', payload: id});
  } catch (error) {
    console.log(error.message);
  }
}
