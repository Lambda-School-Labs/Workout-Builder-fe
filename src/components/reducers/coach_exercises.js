const initialState = [ ];

function coachExercisesReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_EXERCISE_DATA":
    return action.payload;

  case 'DELETE_EXERCISE': {
    const ex_id = action.payload;
    const newExAry = state.filter(el=>(Number(el.id)!==Number(ex_id)));
    return newExAry;
  }

  case 'DUPLICATE_EXERCISE': {
    const newExAry = [...state];
    newExAry.push(action.payload);
    return newExAry;
  }

  default:
    return state;
  }
}

export default coachExercisesReducer;