import { store } from '../../index';

const initialState = [
  {id: 1, name: "Program 1", description: "Test program description", coach_id: 1, length: 10, phase: "strength",
    workouts: [
      {id: 1, name: "push day", description: "push day arm workout", day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]},
      {id: 2, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
        {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
        {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
      ]},
      {id: 3, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
        {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
      ]},
    ],
    assigned_clients: [1, 3, 5, 7, 9]
  },
  {id: 2, name: "Program 2", description: "Test program description", coach_id: 1, length: 22, phase: "strength",
    workouts: [
      {id: 4, name: "push day", description: "push day arm workout", day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]},
      {id: 5, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
        {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
        {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
      ]},
      {id: 6, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
        {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
      ]},
    ],
    assigned_clients: [2, 4, 6]
  },
  {id: 3, name: "Program 3", description: "Test program description", coach_id: 1, length: 15, phase: "strength",
    workouts: [
      {id: 7, name: "push day", description: "push day arm workout", day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]},
      {id: 8, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
        {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
        {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
      ]},
      {id: 9, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
        {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
      ]},
    ],
    assigned_clients: [5, 7, 8, 9]
  },
  {id: 4, name: "Program 4", description: "Test program description", coach_id: 1, length: 30, phase: "strength",
    workouts: [
      {id: 10, name: "push day", description: "push day arm workout", day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]},
      {id: 11, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
        {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
        {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
      ]},
      {id: 12, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
        {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
      ]},
    ],
    assigned_clients: [9]
  },
];

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

    const temp_next_program_id = store.getState().temp_next_program_id;

    // add a new program
    createList.push({...action.payload, id: temp_next_program_id});

    return createList;
  default:
    return state;
  }
}

export default coachProgramsReducer;