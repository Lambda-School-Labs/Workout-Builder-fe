/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link }   from '@reach/router';
import { connect } from "react-redux";

import {updateExercise} from "../actions/index";
import {fetchExercise} from '../actions/index';
const ExerciseEdit = (props) => {
  const {exercise} = props;
  console.log(props);
  const [exerciseData,setExerciseData] = useState({
    name: "",
    thumbnail_url: "",
    focal_points: "",
    video_url: ""

  });

  const changeHandler = event => {
    setExerciseData({ ...exerciseData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    props.fetchExercise(props.id);
    setExerciseData(exercise);

  }, []);

  const submitHandler = event => {
    event.preventDefault();
    props.updateExercise(props.id, exerciseData);
  };
  return (
    <>
      <h1> Edit your exercise! </h1>

      <form onSubmit = {submitHandler}>
        <input
          name="name"
          label = "name"
          // className={classes.textField}
          value={exerciseData.name}
          onChange ={changeHandler}
          type= "text"
          required
          margin="normal"
          variant ="outlined"
          placeholder = "Enter name Here"
        >
        </input>
        <input
          name="thumbnail_url"
          label = "thumbnail_url"
          // className={classes.textField}
          value={exerciseData.thumbnail_url}
          onChange ={changeHandler}

          margin="normal"
          variant ="outlined"
          placeholder = "Enter thumbnail_url Here"
        >
        </input>
        <input
          name="focal_points"
          label = "focal_points"
          // className={classes.textField}
          value={exerciseData.focal_points}
          onChange ={changeHandler}
          required
          margin="normal"
          variant ="outlined"
          placeholder = "Enter focal_points Here"
        >
        </input>
        <input
          name="video_url"
          label = "video_url"
          // className={classes.textField}
          value={exerciseData.video_url}
          onChange ={changeHandler}

          margin="normal"
          variant ="outlined"
          placeholder = "Enter video_url Here"
        >
        </input>
        <button type ="submit">edit</button>
      </form>

      <Link to ="/library">
        <button>Back</button>
      </Link>
    </>

  );
};

const mapStateToProps = state => {
  return {
    exercise: state.coach_exercises.exercise
  };
};

export default connect(
  mapStateToProps,
  {updateExercise,fetchExercise})(ExerciseEdit);
