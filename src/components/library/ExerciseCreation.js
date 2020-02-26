import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import serverHandshake from '../../utils/serverHandshake';

const ExerciseCreation = (props) => {
  const Dispatch = useDispatch();

  const [newExercise, setNewExercise] = useState({
    name: '',
    focal_points: '',
    thumbnail_url: '',
    video_url: ''
  });

  const goBackExerciseHome = e => {
    e.preventDefault();
    props.navigate("/library");
  };

  const changeHandler = e => {
    setNewExercise({
      ...newExercise,
      [e.target.name]: e.target.value
    });
  };

  const addExercise = async e => {
    e.preventDefault();
    try {
      const response = await serverHandshake(true).post('/exercises', newExercise);
      console.log(response);
      if (response.status === 201) {
        Dispatch({ type: "CREATE_AN_EXERCISE", payload: newExercise });
        props.navigate('/library');
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h2>Create Exercise</h2>
      <form onSubmit={addExercise}>
        <label htmlFor='name'>Name:<span>*</span> </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Ex: Squats'
          value={newExercise.name}
          onChange={changeHandler}
          required
        />

        <label htmlFor='thumbnail_url'>Link to photo:</label>
        <input
          type='text'
          name='thumbnail_url'
          id='thumbnail_url'
          value={newExercise.thumbnail_url}
          onChange={changeHandler}
        />

        <label htmlFor='focal_points'>Focal points:</label>
        <input
          type='text'
          name='focal_points'
          id='focal_points'
          value={newExercise.focal_points}
          onChange={changeHandler}
        />

        <label htmlFor='video_url'>Link to video:</label>
        <input
          type='text'
          name='video_url'
          id='video_url'
          value={newExercise.video_url}
          onChange={changeHandler}
        />

        <div>
          <button onClick={goBackExerciseHome}>Cancel</button>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseCreation;
