import React, { useState, useEffect } from "react";
import { Link }   from '@reach/router';

function ExerciseAdd  (props) {

  const [exercise,setExercise] = useState({
    name: "",
    thumbnail_url: "",
    focal_points: "",
    video_url: ""

  });

  const changeHandler = event => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  return (
    <>

      <h1> add your exercise! </h1>

      <form>
        <input
          name="name"
          label = "name"
          // className={classes.textField}
          value={exercise.name}
          onChange ={changeHandler}
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
          value={exercise.thumbnail_url}
          onChange ={changeHandler}
          required
          margin="normal"
          variant ="outlined"
          placeholder = "Enter thumbnail_url Here"
        >
        </input>
        <input
          name="focal_points"
          label = "focal_points"
          // className={classes.textField}
          value={exercise.focal_points}
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
          value={exercise.video_url}
          onChange ={changeHandler}
          required
          margin="normal"
          variant ="outlined"
          placeholder = "Enter video_url Here"
        >
        </input>
        <button type ="submit">Add</button>
      </form>

      <Link to ="/library">
        <button>Back</button>
      </Link>
    </>
  );
};

export default ExerciseAdd;