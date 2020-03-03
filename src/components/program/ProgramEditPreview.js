import React, { useEffect, useCallback } from "react";
import { connect } from 'react-redux';

// mobile styling - desktop can be done in tailwind
import "./program-mobile-styles.scss"
import ProgramPreviewElement from "./ProgramPreviewElement";

const ProgramEditPreview = ({ navigate, new_program, coach_exercises }) => {

    const goBack = () => {
        window.history.back()
    };

    // leave the page if name is empty - to avoid errors in case user refreshes and data resets
    useEffect(() => {
        if(new_program.name === "") {
            navigate("/program");
        }
    }, [new_program.name, navigate]);

    const getExerciseName = useCallback((input_id) => {
        // find the name of the selected exercise (by id) from the exercise library
    
        if (!coach_exercises.length) {
            return '';
        } else if (!coach_exercises.filter((exercise) => {return exercise.id === input_id}).length) {
            return '';
        } else {
            return coach_exercises.filter((exercise) => {return exercise.id === input_id})[0].name;
        }
    },[coach_exercises])


    // Variables necessary for generating tables
    const workoutList = JSON.parse(JSON.stringify(new_program.workouts));
    const fullRowsNumber = Math.floor(workoutList.length / 7);
    const lastRowCells = workoutList.length % 7;


    const generateLastRow = () => {
        // Generates the last row of the table (including blanks)
        const tempList = JSON.parse(JSON.stringify(new_program.workouts));
        let lastRowList = tempList.splice((fullRowsNumber * 7), lastRowCells);
        let blankCellList = [];
        if(lastRowCells > 0) {
            for (let i = 0; i < 7 - lastRowCells; i++) {
                blankCellList.push(i);
            }
        }
        return (
            <tr className="last-row">
                {lastRowList.map((day, idx) => {
                    return (
                        <td key={`lastrow-${idx}-${day.id}`}>
                            <h3>Day {day.day}</h3>
                            <h4>{day.name}</h4>
                            {day.exercises.map((exercise, idx) => {
                                return (
                                    <div className="table-exercise" key={`lastrow-${day.id}-${idx}-${exercise.order}`}>
                                        <div className="table-exercise-title">
                                            <p>{String.fromCharCode(exercise.order+64).toUpperCase()}</p>
                                            <h5>{getExerciseName(exercise.exercise_id)}</h5>
                                        </div>
                                        <p>{exercise.exercise_details}</p>
                                    </div>
                                )
                            })}
                        </td>
                    )
                })}
                {blankCellList.map((emptyCell, idx) => {
                    return (
                        <td className="blank-cell" key={idx}>
                        </td>
                    )
                })}
            </tr>
        )
    }

    const generateTable = () => {
        // Generates the full rows of the table
        // Also appends the last row to the table from the generateLastRow function
        let fullRowsList = []
        for (let i=0; i < fullRowsNumber; i++) {
            fullRowsList.push(workoutList.splice(0, 7));
        }
        return (
            <table className="workout-schedule-table">
                <tbody>
                    {fullRowsList.map((row, idx) => {
                        return (
                            <tr className="full-row" key={`fullrow-${idx}`}>
                                {row.map(day => {
                                    return (
                                        <td className="filled-cell">
                                            <div>
                                                <h3>Day {day.day}</h3>
                                                <h4>{day.name}</h4>
                                                {day.exercises.map((exercise, idx) => {
                                                    return (
                                                        <div className="table-exercise" key={`fullrow-${day.id}-${idx}-${exercise.order}`}>
                                                            <div className="table-exercise-title">
                                                                <p>{String.fromCharCode(exercise.order+64).toUpperCase()}</p>
                                                                <h5>{getExerciseName(exercise.exercise_id)}</h5>
                                                            </div>
                                                            <p>{exercise.exercise_details}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {generateLastRow()}
                </tbody>
            </table>
        )
    }

    return(
        <>

        {/* MOBILE VIEW */}

        <div className="program-preview">
            <div className="back-div">
                <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={() => goBack()} alt="back"></img>
                <p className="back-text" onClick={() => goBack()}>Back</p>
            </div>
            <h3 className="program-preview-title">{new_program.name}</h3>
            {new_program.workouts.map(day => {
                return (
                    <ProgramPreviewElement key={day.id} day={day} />
                )
            })}
        </div>

        {/* DESKTOP VIEW */}

        <div className="d-program-preview">
            <div className="back-div">
                <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={() => goBack()} alt="back"></img>
                <p className="back-text" onClick={() => goBack()}>Back</p>
            </div>
            <div className="d-preview-info">
                <div className="info-left">
                    <h2 className="preview-name">{new_program.name}</h2>
                    <div className="preview-phase-days">
                        <h3>{new_program.phase}</h3>
                        <h3>{new_program.length} Days</h3>
                    </div>
                </div>
                <div className="info-right">
                    <button className="assign-to-client-button">Assign to client</button>
                    <button className="edit-button" onClick={() => navigate("/program/edit")}>Edit</button>
                </div>
            </div>
            {generateTable()}
        </div>
        </>
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
  )(ProgramEditPreview);