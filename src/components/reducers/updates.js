const initialState = 0;

function updatesReducer(state = initialState, action) {
  switch (action.type) {
  case "UPDATE":
    return state + 1;
  default:
    return state;
  }
}

export default updatesReducer;