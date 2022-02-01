// reducer function takes in context state and action.
// state default value cannot be null, set initial to an array.
export default (state = [], action) => {
  // compare action.type, do stuff, and then return the state after action has been applied.
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      // spread all posts in state, then add new post to array.
      return [...state, action.payload];

    case "UPDATE":
      // check if post._id matches action.payload._id, if true, return newly updated action.payload. Otherwise, return original post.
      // Update process: maps over origin 'post' array(state), updating the data, then returning the newly updated array.
      return state.map((post) => post._id === action.payload._id ? action.payload : post);

    default:
      return state;
  }
};
