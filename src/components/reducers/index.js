import { combineReducers } from 'redux';
import coach_clients from './coach_clients';
import coach_exercises from './coach_exercises';
import coach_programs from './coach_programs';
import loggedInUser from './loggedInUser';
import new_program from './new_program';
import temp_next_program_id from './temp_next_program_id';
import temp_next_workout_id from './temp_next_workout_id';
import updates from './updates';
import userID from './userID';
import new_client from './new_client';

export default combineReducers({
  coach_clients,
  coach_exercises,
  coach_programs,
  loggedInUser,
  new_program,
  temp_next_program_id,
  temp_next_workout_id,
  updates,
  userID,
  new_client
});
