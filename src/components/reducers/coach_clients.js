const initialState = [
  {id: 1, first_name: "Dominic", last_name: "Ellis", email: "A1.com", coach_id: 1},
  {id: 2, first_name: "Taylor", last_name: "Hayes", email: "A2.com", coach_id: 1},
  {id: 3, first_name: "Bradley", last_name: "Sharp", email: "A3.com", coach_id: 1},
  {id: 4, first_name: "Tyrell", last_name: "Barr", email: "A4.com", coach_id: 1},
  {id: 5, first_name: "Cade", last_name: "Leonard", email: "A5.com", coach_id: 1},
  {id: 6, first_name: "Jaime", last_name: "Mills", email: "A6.com", coach_id: 1},
  {id: 7, first_name: "Glen", last_name: "Kelly", email: "A7.com", coach_id: 1},
  {id: 8, first_name: "Jaden", last_name: "Tillman", email: "A8.com", coach_id: 1},
  {id: 9, first_name: "Jordan", last_name: "Logan", email: "A9.com", coach_id: 1},
];

function coachClientsReducer(state = initialState, action) {
  switch (action.type) {
  case "SET_CLIENT_DATA":
    return action.payload;
  default:
    return state;
  }
}

export default coachClientsReducer;