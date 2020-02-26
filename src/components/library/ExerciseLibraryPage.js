import React, { useState, useEffect } from "react";
import ExerciseAdd from "./ExerciseAdd";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';

import ExerciseList from './ExerciseCard';
const ExerciseLibraryPage = (props) => {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    serverHandshake(token)
      .get('/exercises')
      .then(res => {

        setExercises(res.data);
      })
      .catch(err => {
        console.log("There was an error, ", err);
      });
  }, []);

  return (
    <>
      <Link to ="library/add">
        <button>add exercise</button>
      </Link>
      <div>
        {exercises.map(e => (
          <ExerciseList key ={e.exercise_id} exercise ={e}/>
        ))}
      </div>
    </>

  );
};

export default ExerciseLibraryPage;