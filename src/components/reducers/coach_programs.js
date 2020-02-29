const initialState = [];

function coachProgramsReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_PROGRAM_DATA":
    return action.payload;
  case "UPDATE_A_PROGRAM":
    // get coach programs
    const updatedList = [...state];

    // find index of old program data
    // const programIndex = updatedList.indexOf(action.payload.old);
    const programIndex = updatedList.findIndex(i => i.id === action.payload.id);

    // replace old data with new data
    updatedList[programIndex] = action.payload;

    return [...updatedList];
  case "DELETE_A_PROGRAM":
    return state.filter(program => program.id !== action.payload);
  case "CREATE_A_PROGRAM":
    // get coach programs
    let createList = [...state];

    // add a new program
    createList.push(action.payload);

    return createList;
  default:
    return state;
  }
}

export default coachProgramsReducer;