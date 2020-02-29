import {EDIT_EXERCISE} from "../actions";

const initialState = [];

function coachExercisesReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_EXERCISE_DATA":
    return action.payload;

  case "CREATE_AN_EXERCISE":
    return [...state, action.payload];

  case EDIT_EXERCISE:
    const filtered_exercises = state.map(e => e.id === action.payload.id ? action.payload : e);
    return filtered_exercises;

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