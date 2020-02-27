import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import serverHandshake from '../../utils/serverHandshake';

import './exercise-mobile-styles.scss';

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
        Dispatch({ type: "CREATE_AN_EXERCISE", payload: response.data });
        props.navigate('/library');
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className='e-creation-div'>
      <h2 className='e-header'>Create Exercise</h2>
      <form className='e-form'>
        <label className='e-label' htmlFor='name'>Name:<span className='e-asterisk'>*</span> </label>
        <input className='e-input'
          type='text'
          name='name'
          id='name'
          placeholder='Ex: Squats'
          value={newExercise.name}
          onChange={changeHandler}
          required
        />

        <label className='e-label' htmlFor='thumbnail_url'>Link to photo:</label>
        <input className='e-input'
          type='text'
          name='thumbnail_url'
          id='thumbnail_url'
          value={newExercise.thumbnail_url}
          onChange={changeHandler}
        />

        <label className='e-label' htmlFor='focal_points'>Focal points:</label>
        <input className='e-input'
          type='text'
          name='focal_points'
          id='focal_points'
          value={newExercise.focal_points}
          onChange={changeHandler}
        />

        <label className='e-label' htmlFor='video_url'>Link to video:</label>
        <input className='e-input'
          type='text'
          name='video_url'
          id='video_url'
          value={newExercise.video_url}
          onChange={changeHandler}
        />
      </form>
      <div>
        <button onClick={goBackExerciseHome}>Cancel</button>
        <button onClick={addExercise}>Save</button>
      </div>

    </div>
  );
};

export default ExerciseCreation;