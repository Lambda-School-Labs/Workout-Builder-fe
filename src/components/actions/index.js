import serverHandshake from '../../utils/serverHandshake';

export const fetchAllData = (dispatch) => {
  const fetchClients = serverHandshake(true).get('/clients');
  const fetchExercises = serverHandshake(true).get('/exercises');
  const fetchPrograms = serverHandshake(true).get('/programs');
  return Promise.all([fetchClients, fetchExercises, fetchPrograms]);
};