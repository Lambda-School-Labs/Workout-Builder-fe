const initialState = 13;

function tempNextWorkoutIDReducer(state = initialState, action) {
  switch (action.type) {
  case "CYCLE_WORKOUT_ID":
    return state + 1;
  default:
    return state;
  }
}

export default tempNextWorkoutIDReducer;