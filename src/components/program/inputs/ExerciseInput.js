import React, { useState, useEffect, useRef, useCallback } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const ExerciseInput = (props) => {
  const Dispatch = useDispatch();

  /***** Modal methods *****/

  const [ExerciseListModal, ToggleExerciseListModal] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    ToggleExerciseListModal(false);
  };

  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal(event);
      }
    }

    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  /***** Input methods *****/

  const getExerciseName = useCallback((input_id) => {
    // find the name of the selected exercise (by id) from the exercise library

    if (!props.coach_exercises.length) {
      return '';
    } else if (!props.coach_exercises.filter((exercise) => {return exercise.id === input_id}).length) {
      return '';
    } else {
      return props.coach_exercises.filter((exercise) => {return exercise.id === input_id})[0].name;
    }
  },[props.coach_exercises])

  const [input, setInput] = useState(getExerciseName(props.exercise.exercise_id));

  // Ensure that the input is updated every time the "update" redux command is run
  useEffect(() => {
    setInput(getExerciseName(props.exercise.exercise_id));
  }, [props.updates, getExerciseName, props.exercise.exercise_id]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    // close modal if input is empty
    if(input === "" || input === getExerciseName(props.exercise.exercise_id)){
        ToggleExerciseListModal(false);
    } else {
        ToggleExerciseListModal(true);
    }
  },[input, props.exercise.exercise_id, getExerciseName]);

  const chooseExercise = (exercise) => {
    // find index of workout and index of exercise
    let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
    let indexWorkout = updatedProgram.workouts.findIndex(workout => workout.id === props.day.id);
    let indexExercise = updatedProgram.workouts[indexWorkout].exercises.findIndex(exercise => exercise.order === props.exercise.order);

    // update the exercise id
    updatedProgram.workouts[indexWorkout].exercises[indexExercise].exercise_id = exercise.id;

    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    // update the input
    setInput(exercise.name);
    setTimeout(function(){ ToggleExerciseListModal(false); }, 10);
    
  }

  return(
    <div className="exercise-input-div" ref={wrapperRef}>
      <input className="exercise-input"
        value={input}
        onChange={handleChange}
      ></input>
      {ExerciseListModal ?
        <div className="exercise-list-outer">
          <div className="exercise-list-inner">
            {props.coach_exercises.filter(exercise => exercise.name.toLowerCase().includes(input.toLowerCase())).map((exercise, idx) => {
              return (
                <div key={`input-${idx}-${exercise.exercise_id}`} className="exercise-element" onClick={() => chooseExercise(exercise)}>
                  {exercise.name}
                </div>
              );
            })}
          </div>
        </div>
        : <div />}
    </div>

  );
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  updates: state.updates,
  coach_clients: state.coach_clients,
  coach_exercises: state.coach_exercises,
  coach_programs: state.coach_programs,
  new_program: state.new_program,
});

export default connect(
  mapStateToProps,
)(ExerciseInput);