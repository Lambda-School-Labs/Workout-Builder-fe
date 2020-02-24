import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const ExerciseDetails = (props) => {
  const Dispatch = useDispatch();

    const updateExerciseDetails = (e) => {
        e.preventDefault();

        // find index of workout and index of the exercise
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
        let indexWorkout = updatedProgram.workouts.findIndex(workout => workout.id === props.day.id);
        let indexExercise = updatedProgram.workouts[indexWorkout].exercises.findIndex(exercise => exercise.order === props.exercise.order);

        // update the exercise details
        updatedProgram.workouts[indexWorkout].exercises[indexExercise].exercise_details = e.target.value;

    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
  };

    return ( 
        <input className="exercise-details" value={props.exercise.exercise_details} onChange={updateExerciseDetails}></input>
    )
}

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
)(ExerciseDetails);