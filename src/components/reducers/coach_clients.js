const initialState = [];

function coachClientsReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_CLIENT_DATA":
    return action.payload;
  default:
    return state;
  }
}

export default coachClientsReducer;