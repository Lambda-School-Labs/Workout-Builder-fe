export const initialState = {
  id: 0,
  name: "",
  description: "",
  coach_id: 1,
  length: 0,
  phase: "",
  workouts: [],
  assigned_clients: [],
};

function newProgramReducer(state = initialState, action) {
  switch (action.type) {
  case "UPDATE_NEW_PROGRAM_DATA":
    return {...state, ...action.payload};
  default:
    return state;
  }
}

export default newProgramReducer;