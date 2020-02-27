const initialState = [
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
];

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