import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import ExerciseInput from './modals/ExerciseInput';
import ExerciseDetails from './modals/ExerciseDetails';

// mobile styling - desktop can be done in tailwind
import "./program-mobile-styles.scss"

const ProgramEdit = (props) => {
    const Dispatch = useDispatch();

    const goBackProgramHome = e => {
        e.preventDefault();
        props.navigate("/program");
    };

    // Current day number
    const nextDay = props.new_program.workouts.length + 1;
    const [currentDay, setCurrentDay] = useState(nextDay);

    const addWorkout = () => {
        // Add a workout to the data
        let updatedProgram = {...props.new_program};
        updatedProgram.workouts.push({ id: props.temp_next_workout_id, name: "", description: "",  day: currentDay,
            exercises: []
        });
        // cycle the current day
        setCurrentDay(currentDay + 1);
        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
        // cycle the next workout id - temp dispatch until backend integration
        Dispatch({ type: "CYCLE_WORKOUT_ID" });
    };

    const deleteWorkout = (input_id) => {
        // filter out the workout from the program by id
        let updatedProgram = {...props.new_program};
        updatedProgram.workouts = updatedProgram.workouts.filter((workout) => workout.id != input_id);
        // reapply day numbers - in case you delete a day in the middle of the program
        if (updatedProgram.workouts.length > 0) {
            let daynumber = 1;
            updatedProgram.workouts.forEach(workout => {
                workout.day = daynumber;
                daynumber += 1;
                setCurrentDay(daynumber);
            });
        } else {
            // all workout days have been deleted so reset the day to 1
            setCurrentDay(1);
        }
        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    };

    const addExercise = (workout_id) => {
        // hard copy props.newprogram
        // CAN NOT use a spread here because for some ungodly reason the .push() command three lines down was still modifying the original.
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
        let index = updatedProgram.workouts.findIndex(workout => workout.id === workout_id);
        updatedProgram.workouts[index].exercises.push({ exercise_id: 0, order: 0, exercise_details: ""});
        // reapply order numbers
        let ordernumber = 1
        updatedProgram.workouts[index].exercises.forEach(exercise => {
            exercise.order = ordernumber;
            ordernumber += 1;
        });
        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    };

    const deleteExercise = (workout_id, order) => {
        // hard copy props.newprogram
        // another issue where the spread operator doesn't create a separate duplicate
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
        let index = updatedProgram.workouts.findIndex(workout => workout.id === workout_id);
        updatedProgram.workouts[index].exercises = updatedProgram.workouts[index].exercises.filter((exercise) => (exercise.order !== order));

        // reapply order numbers
        let ordernumber = 1
        updatedProgram.workouts[index].exercises.forEach(exercise => {
            exercise.order = ordernumber;
            ordernumber += 1;
        });

        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    }

    const submitEdits = () => {
        const defaultProgram = {id: 0, name: "", description: "", coach_id: 1, length: 0, phase: "",
        workouts: [ ],
        assigned_clients: []
        }
        Dispatch({ type: "UPDATE_A_PROGRAM", payload: props.new_program });
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
        props.navigate("/program");
    }

    return(
        <div className="program-creation">
            <div className="back-div">
                <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={goBackProgramHome}></img>
                <p className="back-text" onClick={goBackProgramHome}>Back</p>
            </div>
            <button className="publish-button" onClick={() => submitEdits()}>Submit Edits</button>
            {props.new_program.workouts.map(day => {
                return (
                    <div className="day-div">
                        <div className="day-title-div">
                            <h2 className="day-title">Day {day.day}:</h2>
                            <img className="delete-button" src="https://i.imgur.com/nGDM0fq.png" onClick={() => deleteWorkout(day.id)}></img>
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
                                        <img className="delete-button" src="https://i.imgur.com/nGDM0fq.png" onClick={() => deleteExercise(day.id, exercise.order)}></img>
                                    </div>
                                    <ExerciseInput day={day} exercise={exercise} />
                                    <ExerciseDetails day={day} exercise={exercise} />
                                </div>
                            )
                        })}
                        <button className="add-exercise-button" onClick={() => addExercise(day.id)}>+ Add exercise</button>
                    </div>
                )
            })}
            <button className="add-day-button" onClick={() => addWorkout()}>+ Add day</button>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
    new_program: state.new_program,
    temp_next_workout_id: state.temp_next_workout_id,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramEdit);