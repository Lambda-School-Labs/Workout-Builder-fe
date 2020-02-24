export const dummyClientPrograms = [
  {
    "client_id": 1,
    "first_name": "Jonathan",
    "last_name": "Picazo",
    "start_date": "2020-2-17",
    "program_id": 1,
    "name": "Super Sets",
    "length": 21,
    "phase": "Strength"
  },
  {
    "client_id": 2,
    "first_name": "Justine",
    "last_name": "Gennaro",
    "start_date": "2020-2-17",
    "program_id": 9,
    "name": "Other Sets",
    "length": 14,
    "phase": "Endurance"
  },
  {
    "client_id": 1,
    "first_name": "Jonathan",
    "last_name": "Picazo",
    "start_date": "2020-2-17",
    "program_id": 3,
    "name": "Super Sets",
    "length": 21,
    "phase": "Strength"
  },
  {
    "client_id": 2,
    "first_name": "Justine",
    "last_name": "Gennaro",
    "start_date": "2020-2-17",
    "program_id": 6,
    "name": "Other Sets",
    "length": 14,
    "phase": "Endurance"
  }
];

export const dummyPrograms = [
  {
    id: 1,
    name: "Program 1",
    description: "program1 description",
    coach_id: 1,
    length: 10,
    phase: "strength",
    workouts: [
      {
        id: 1,
        name: "push day",
        description: "push day arm workout",
        day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]
      },
      {
        id: 2,
        name: "pull day",
        description: "pull day arm and back workout",
        day: 2,
        exercises: [
          {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
          {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
        ]
      },
      {
        id: 3,
        name: "legs and core",
        description: "legs and core day workout",
        day: 3,
        exercises: [
          {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
        ]
      },
    ],
    assigned_clients: [1, 3, 5, 7, 9]
  },
  {
    id: 2,
    name: "Program 2",
    description: "Test program description",
    coach_id: 1,
    length: 22,
    phase: "strength",
    workouts: [
      {
        id: 4,
        name: "push day",
        description: "push day arm workout",
        day: 1,
        exercises: [
          {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
          {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
        ]
      },
      {
        id: 5,
        name: "pull day",
        description: "pull day arm and back workout",
        day: 2,
        exercises: [
          {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
          {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
        ]
      },
      {
        id: 6,
        name: "legs and core",
        description: "legs and core day workout",
        day: 3,
        exercises: [
          {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
          {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
        ]
      },
    ],
    assigned_clients: [2, 4, 6]
  }
];