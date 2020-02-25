import serverHandshake from '../../utils/serverHandshake';

export const fetchAllData = async (dispatch) => {
  const fetchClients = serverHandshake(true).get('/clients');
  const fetchExercises = serverHandshake(true).get('/exercises');
  const fetchPrograms = serverHandshake(true).get('/programs');
  try {
    const values = await Promise.all([fetchClients, fetchExercises, fetchPrograms]);
    dispatch({ type: 'SET_CLIENT_DATA', payload: values[0].data });
    dispatch({ type: 'SET_EXERCISE_DATA', payload: values[1].data });
    dispatch({ type: 'SET_PROGRAM_DATA', payload: values[2].data });
  } catch (error) {
    console.error(error.response.data.message);
  }
};