import React, { useState, useEffect } from "react";
import ExerciseAdd from "./ExerciseAdd";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';
import { connect } from "react-redux";
import ExerciseCard from './ExerciseCard';
import {fetchExercises} from '../actions/index';
const ExerciseLibraryPage = (props) => {

  const {exercises} = props;

  useEffect(() => {

    // props.fetchExercises();
    props.fetchExercises();
    // serverHandshake(true)
    //   .get('/exercises')
    //   .then(res => {

    //     setExercises(res.data);
    //   })
    //   .catch(err => {
    //     console.log("There was an error, ", err);
    //   });
  }, []);
  console.log(exercises);
  return (
    <>
      <Link to ="library/add">
        <button>add exercise</button>
      </Link>
      <div>
        {exercises.map(e => (
          <ExerciseCard key ={e.exercise_id} exercise ={e}/>
        ))}
      </div>
    </>

  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    exercises: state.coach_exercises.exercises
  };
};

export default connect(
  mapStateToProps,
  {fetchExercises})(ExerciseLibraryPage);
