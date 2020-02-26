import React, { useState, useEffect } from "react";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';
import { connect } from "react-redux";
import {fetchExercise} from '../actions/index';

function Exercise(props){

  const {exercise} = props;

  useEffect(() => {
    props.fetchExercise(props.id);
    // serverHandshake(true)
    //   .get(`/exercises/${props.id}`)
    //   .then(res => {

    //     setExercise(res.data);
    //   })
    //   .catch(err => {
    //     console.log("There was an error, ", err);
    //   });
  }, []);

  return(
    <>
      <div>
        <h1> name: {props.exercise.name} </h1>
        <h1>  focal_points:{exercise.focal_points}</h1>
        <h1>  video_url:{exercise.video_url}</h1>
      </div>
      <Link to ="/library">
        <button>Back</button>
      </Link>

      <Link to = {`/library/edit/${props.exercise.id}`}>
        <div>
          <button>edit</button>
        </div>
      </Link>
    </>
  );
}
const mapStateToProps = state => {

  return {
    exercise: state.coach_exercises.exercise
  };
};

export default connect(mapStateToProps, {fetchExercise})(Exercise);