const initialState = {
  loggedInUser: {
    first_name: localStorage.getItem('logged-in-first-name'),
    last_name: localStorage.getItem('logged-in-last-name'),
    email: localStorage.getItem('logged-in-email'),
  },
  userID: localStorage.getItem('user-id'),
  updates: 0,
  coach_clients: [ ],
  coach_exercises: [ ],
  coach_programs: [ ],
  temp_next_program_id: 5,
  temp_next_workout_id: 13,
  new_program: {id: 0, name: "", description: "", coach_id: 1, length: 0, phase: "",
    workouts: [ ],
    assigned_clients: [],
  },
  // new_program: {id: 1, name: "Program 1", description: "Test program description", coach_id: 1, length: 10, phase: "strength",
  // workouts: [
  //   {id: 1, name: "push day", description: "push day arm workout", day: 1, 
  //   exercises: [
  //     {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
  //     {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
  //     {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
  //   ]}, 
  //   {id: 2, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
  //     {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
  //     {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
  //     {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
  //   ]},
  //   {id: 3, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
  //     {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
  //     {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
  //     {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
  //   ]},
  // ],
  // assigned_clients: [1, 3, 5, 7, 9]
  // },
}

function reducer(state = initialState, action) {
  switch(action.type) {
  case "SET_LOGGED":
    return {
      ...state,
      loggedInUser: action.payload,
    };
  case "SET_ID":
    return {
      ...state,
      userID: action.payload,
    };
  case "UPDATE":
    return {
      ...state,
      updates: (state.updates + 1),
    };

    /*******  Program reducers *******/

  case "UPDATE_A_PROGRAM":

    // get coach programs
    const updatedList = [...state.coach_programs];

    // find index of old program data
    // const programIndex = updatedList.indexOf(action.payload.old);
    const programIndex = updatedList.findIndex(i => i.id === action.payload.id);

    // replace old data with new data
    updatedList[programIndex] = action.payload;

    return {
      ...state,
      coach_programs: [...updatedList]
    };

  case "DELETE_A_PROGRAM":
    return {
      ...state,
      coach_programs: state.coach_programs.filter((program) => {return program.id !== action.payload;})
    };

  case "CREATE_A_PROGRAM":
    // get coach programs
    let createList = [...state.coach_programs];

    // add a new program
    createList.push({...action.payload, id: state.temp_next_program_id});

    return {
      ...state,
      coach_programs: createList,
      // increment to the next id - to be removed after back end integration
      temp_next_program_id: (state.temp_next_program_id + 1)
    };

  case "UPDATE_NEW_PROGRAM_DATA":
    return {
      ...state,
      new_program: {...state.new_program, ...action.payload}
    };

  case "CYCLE_WORKOUT_ID":
    return {
      ...state,
      temp_next_workout_id: (state.temp_next_workout_id + 1)
    };

  /******* Gross Data Population *******/

  case "SET_CLIENT_DATA":
    return {
      ...state,
      coach_clients: {...action.payload}
    };

  case "SET_EXERCISE_DATA":
    return {
      ...state,
      coach_exercises: {...action.payload}
    };

  case "SET_PROGRAM_DATA":
    return {
      ...state,
      coach_programs: {...action.payload}
    };

  default:
    return state;
  }
}

export default reducer;