const initialState = {
  loggedInUser: {
    first_name: sessionStorage.getItem('logged-in-first-name'),
    last_name: sessionStorage.getItem('logged-in-last-name'),
    email: sessionStorage.getItem('logged-in-email'),
  },
  userID: sessionStorage.getItem('user-id'),
  updates: 0,
}

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
      default:
          return state;
  }
}

export default reducer;