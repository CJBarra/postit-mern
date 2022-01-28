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

    default:
      return state;
  }
};
