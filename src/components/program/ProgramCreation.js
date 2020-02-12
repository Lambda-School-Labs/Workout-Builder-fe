import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

// mobile styling - desktop can be done in tailwind
import "./program-mobile-styles.scss"

const testProgram = {id: 1, name: "Program 1", description: "Test program description", coach_id: 1, length: 10, phase: "strength",
    workouts: [
    {id: 1, name: "push day", description: "push day arm workout", day: 1, 
    exercises: [
        {exercise_id: 1, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 2, order: 2, exercise_details: "50lbs dumbbells - 5 sets of 5"},
        {exercise_id: 3, order: 3, exercise_details: "70lbs bar - 5 sets of 5"}
    ]}, 
    {id: 2, name: "pull day", description: "pull day arm and back workout", day: 2, exercises: [
        {exercise_id: 4, order: 1, exercise_details: "bodyweight - 5 sets of 5"},
        {exercise_id: 5, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 6, order: 3, exercise_details: "30lbs dumbbells - 5 sets of 5"}
    ]},
    {id: 3, name: "legs and core", description: "legs and core day workout", day: 3, exercises: [
        {exercise_id: 7, order: 1, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 8, order: 2, exercise_details: "135lbs bar - 5 sets of 5"},
        {exercise_id: 9, order: 3, exercise_details: "bodyweight - 5 sets of 5"},
    ]},
    ],
assigned_clients: [1, 3, 5, 7, 9]
}

const ProgramCreation = (props) => {
    // find the name of the selected exercise (by id) from the exercise library
    const getExerciseName = (input_id) => {
        return props.coach_exercises.filter((exercise) => {return exercise.id === input_id})[0].name;
    }

    return(
        <div className="program-creation">
            <div className="back-div">
                <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png"></img>
                <p className="back-text">Back</p>
            </div>
            <button className="publish-button">Publish Program</button>
            {testProgram.workouts.map(day => {
                return (
                    <div className="day-div">
                        <div className="day-title-div">
                            <h2 className="day-title">Day {day.day}:</h2>
                            <img className="delete-button" src="https://i.imgur.com/nGDM0fq.png"></img>
                        </div>
                        <div className="coach-instructions">
                            <h3 className="instructions-title">Coach Instructions</h3>
                            <div className="instructions-text">Use this area to help the athlete understand goals for today’s session</div>
                        </div>
                        {day.exercises.map(exercise => {
                            return(
                                <div className="exercise-div">
                                    <div className="icon-div">
                                        <p className="icon-letter">{String.fromCharCode(exercise.order+64).toUpperCase()}</p>
                                        <img className="delete-button" src="https://i.imgur.com/nGDM0fq.png"></img>
                                    </div>
                                    <input className="exercise-input" value={getExerciseName(exercise.exercise_id)}></input>
                                    <input className="exercise-info" value={exercise.exercise_details}></input>
                                </div>
                            )
                        })}
                        <button className="add-exercise-button">+ Add exercise</button>
                    </div>
                )
            })}
            <button className="add-day-button">+ Add day</button>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramCreation);