import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import serverHandshake from '../../utils/serverHandshake';
import videoIcon from '../../img/video-icon.svg';

import './exercise-mobile-styles.scss';

const ExerciseCreation = (props) => {
  const Dispatch = useDispatch();

  const [newExercise, setNewExercise] = useState({
    name: '',
    focal_points: '',
    thumbnail_url: '',
    video_url: ''
  });

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
        props.cancel();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className='e-creation-div'>
        <div className='e-header-div'>
          <h2 className='e-header'>Create Exercise</h2>
        </div>
        <form className='e-form' onSubmit={addExercise}>
          <label className='e-label e-label-name' htmlFor='name'>Name:<span className='e-asterisk'> *</span></label>
          <input className='e-input e-input-name'
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
          <textarea className='e-input e-input-focal'
            type='text'
            name='focal_points'
            id='focal_points'
            value={newExercise.focal_points}
            onChange={changeHandler}
          />

          <div className='e-label-video-div'>
            <label className='e-label' htmlFor='video_url'>Link to video</label>
            <img className='videoIcon' src={videoIcon} alt='video icon' />
          </div>
          <input className='e-input'
            type='text'
            name='video_url'
            id='video_url'
            value={newExercise.video_url}
            onChange={changeHandler}
          />
          <div className='e-button-div'>
            <button className='e-button-cancel' type='button' onClick={props.cancel}>Cancel</button>
            <button className='e-button-save' type='submit'>Save</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ExerciseCreation;