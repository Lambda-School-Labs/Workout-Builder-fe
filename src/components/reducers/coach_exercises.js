const initialState = [ ];

function coachExercisesReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_EXERCISE_DATA":
    return action.payload;
  default:
    return state;
  }
}

export default coachExercisesReducer;