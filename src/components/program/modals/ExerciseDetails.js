import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const ExerciseDetails = (props) => {
    const Dispatch = useDispatch();

    const [details, setDetails] = useState(props.exercise.exercise_details);

    const handleChange = (e) => {
        e.preventDefault();
        setDetails(e.target.value);
    }

    useEffect(() => {
        // update redux store
        updateExerciseDetails();
    },[details]);

    const updateExerciseDetails = () => {
        // find index of workout and index of exercise
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
        let indexWorkout = updatedProgram.workouts.findIndex(workout => workout.id === props.day.id);
        let indexExercise = updatedProgram.workouts[indexWorkout].exercises.findIndex(exercise => exercise.order === props.exercise.order);

        // update the exercise id
        updatedProgram.workouts[indexWorkout].exercises[indexExercise].exercise_details = details;

        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    }

    return (
        <input className="exercise-details" value={details} onChange={handleChange}></input>
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