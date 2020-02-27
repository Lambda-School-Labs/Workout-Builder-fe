const initialState = -10000;

function tempNextProgramIDReducer(state = initialState, action) {
  switch (action.type) {
  case "CREATE_A_PROGRAM":
    return state + 1;
  default:
    return state;
  }
}

export default tempNextProgramIDReducer;