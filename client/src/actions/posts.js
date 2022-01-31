import * as api from "../api";

//------------------- Action Creators -------------------//

// since asyncronous logic is being used to fetch data, thunk requires additional arrow function to dispatch
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
