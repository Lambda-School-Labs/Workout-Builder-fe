const initialState = localStorage.getItem('user-id');

function userIDReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_ID":
    return action.payload;
  default:
    return state;
  }
}

export default userIDReducer;