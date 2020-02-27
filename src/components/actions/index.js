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

export function deleteExercise(ex_id) {
  return function(dispatch) {
    serverHandshake(true)
      .delete(`/exercises/${ex_id}`)
      .then(res=>{
        // console.log("This is res in deleteExercise:",res);
        dispatch({type:'DELETE_EXERCISE',payload:ex_id});
      })
      .catch(error => {
        console.error(error.response.data.message);
      });
  };
}

export function duplicateExercise(exeObj) {
  return function(dispatch) {
    serverHandshake(true)
      .post(`/exercises`,exeObj)
      .then(res=>{
        // console.log("This is in duplicateExercise:",res);
        dispatch({type:'DUPLICATE_EXERCISE',payload:res.data});
      })
      .catch(error => {
        console.error(error.response.data.message);
      });
  };
}