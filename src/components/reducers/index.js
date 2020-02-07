const initialState = {
  loggedInUser: {
    first_name: localStorage.getItem('logged-in-first-name'),
    last_name: localStorage.getItem('logged-in-last-name'),
    email: localStorage.getItem('logged-in-email'),
  },
  userID: localStorage.getItem('user-id') || null,
  updates: 0,
};

function reducer(state = initialState, action) {
  switch(action.type) {
  case "SET_LOGGED":
    return {
      ...state,
      loggedInUser: action.payload,
    };
  case "SET_ID":
    return {
      ...state,
      userID: action.payload,
    };
  case "UPDATE":
    return {
      ...state,
      updates: (state.updates + 1),
    };
  case "LOGOUT":
    return {
      ...state,
      userID: action.payload
    };
  default:
    return state;
  }
}

export default reducer;