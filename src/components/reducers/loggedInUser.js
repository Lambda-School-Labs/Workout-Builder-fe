const initialState = {
  first_name: localStorage.getItem('logged-in-first-name'),
  last_name: localStorage.getItem('logged-in-last-name'),
  email: localStorage.getItem('logged-in-email'),
};

function loggedInUserReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_LOGGED":
    return action.payload;
  default:
    return state;
  }
}

export default loggedInUserReducer;