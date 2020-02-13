const initialState = {
  loggedInUser: {
    first_name: localStorage.getItem('logged-in-first-name'),
    last_name: localStorage.getItem('logged-in-last-name'),
    email: localStorage.getItem('logged-in-email'),
  },
  userID: localStorage.getItem('user-id'),
  updates: 0,
  coach_clients: [
    {id: 1, first_name: "Dominic", last_name: "Ellis", email: "A1.com", coach_id: 1},
    {id: 2, first_name: "Taylor", last_name: "Hayes", email: "A2.com", coach_id: 1},
    {id: 3, first_name: "Bradley", last_name: "Sharp", email: "A3.com", coach_id: 1},
    {id: 4, first_name: "Tyrell", last_name: "Barr", email: "A4.com", coach_id: 1},
    {id: 5, first_name: "Cade", last_name: "Leonard", email: "A5.com", coach_id: 1},
    {id: 6, first_name: "Jaime", last_name: "Mills", email: "A6.com", coach_id: 1},
    {id: 7, first_name: "Glen", last_name: "Kelly", email: "A7.com", coach_id: 1},
    {id: 8, first_name: "Jaden", last_name: "Tillman", email: "A8.com", coach_id: 1},
    {id: 9, first_name: "Jordan", last_name: "Logan", email: "A9.com", coach_id: 1},
  ],
  coach_exercises: [
    {id: 0, coach_id: 1, name: "", type: "", focal_points: "", video_url: "", thumbnail_url: ""}, 
    {id: 1, coach_id: 1, name: "bench press", type: "anaerobic", focal_points: "chest", video_url: "https://www.youtube.com/watch?v=vthMCtgVtFw", thumbnail_url: "http://i3.ytimg.com/vi/vthMCtgVtFw/hqdefault.jpg"}, 
    {id: 2, coach_id: 1, name: "shoulder press", type: "anaerobic", focal_points: "shoulders", video_url: "https://www.youtube.com/watch?v=qEwKCR5JCog", thumbnail_url: "http://i3.ytimg.com/vi/qEwKCR5JCog/hqdefault.jpg"},
    {id: 3, coach_id: 1, name: "skull crushers", type: "anaerobic", focal_points: "triceps", video_url: "https://www.youtube.com/watch?v=d_KZxkY_0cM", thumbnail_url: "http://i3.ytimg.com/vi/d_KZxkY_0cM/hqdefault.jpg"},
    {id: 4, coach_id: 1, name: "pull ups", type: "anaerobic", focal_points: "lats", video_url: "https://www.youtube.com/watch?v=K81-SLUFo9c", thumbnail_url: "http://i3.ytimg.com/vi/K81-SLUFo9c/hqdefault.jpg"}, 
    {id: 5, coach_id: 1, name: "barbell rows", type: "anaerobic", focal_points: "back", video_url: "https://www.youtube.com/watch?v=RQU8wZPbioA", thumbnail_url: "http://i3.ytimg.com/vi/RQU8wZPbioA/hqdefault.jpg"},
    {id: 6, coach_id: 1, name: "biscep curls", type: "anaerobic", focal_points: "bisceps", video_url: "https://www.youtube.com/watch?v=in7PaeYlhrM", thumbnail_url: "http://i3.ytimg.com/vi/in7PaeYlhrM/hqdefault.jpg"},
    {id: 7, coach_id: 1, name: "barbell squats", type: "anaerobic", focal_points: "legs and core", video_url: "https://www.youtube.com/watch?v=1oed-UmAxFs", thumbnail_url: "http://i3.ytimg.com/vi/1oed-UmAxFs/hqdefault.jpg"}, 
    {id: 8, coach_id: 1, name: "deadlifts", type: "anaerobic", focal_points: "legs and core", video_url: "https://www.youtube.com/watch?v=ytGaGIn3SjE", thumbnail_url: "http://i3.ytimg.com/vi/ytGaGIn3SjE/hqdefault.jpg"},
    {id: 9, coach_id: 1, name: "situps", type: "anaerobic", focal_points: "core", video_url: "https://www.youtube.com/watch?v=jDwoBqPH0jk", thumbnail_url: "http://i3.ytimg.com/vi/jDwoBqPH0jk/hqdefault.jpg"},
  ],
  coach_programs: [
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
  ],
  temp_next_program_id: 5,
  temp_next_workout_id: 13,
  new_program: {id: 0, name: "", description: "", coach_id: 1, length: 0, phase: "",
  workouts: [ ],
  assigned_clients: [],
  },
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
        console.log(action.payload);

        // get coach programs
        const updatedList = [...state.coach_programs];
        console.log(updatedList);

        // find index of old program data
        // const programIndex = updatedList.indexOf(action.payload.old);
        const programIndex = updatedList.findIndex(i => i.id === action.payload.old.id);
        console.log(programIndex);

        // replace old data with new data
        updatedList[programIndex] = action.payload.new;
        console.log(updatedList[programIndex]);

        return {
          ...state,
          coach_programs: [...updatedList]
        };

      case "DELETE_A_PROGRAM":
        return {
          ...state,
          coach_programs: state.coach_programs.filter((program) => {return program.id != action.payload})
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
      
      default:
        return state;
  }
}

export default reducer;