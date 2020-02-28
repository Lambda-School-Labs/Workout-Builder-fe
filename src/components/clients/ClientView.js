import React, { useState, useEffect, useCallback } from "react";
import { connect } from 'react-redux';
import EditClient from './modals/EditClient';
import { useDispatch } from 'react-redux';

// mobile styling


// desktop styling
import "./clients-desktop-styles.scss"

const ClientView = (props) => {
    const Dispatch = useDispatch();
    const [EditClientModal, ToggleEditClientModal] = useState(false);

    // Open the edit client modal
    const editClient = () => {
        ToggleEditClientModal(true);
    }

    const goBack = () => {
        window.history.back()
    };

    // leave the page if name is empty - to avoid errors in case user refreshes and data resets
    useEffect(() => {
        if(props.client_data.name === "") {
            props.navigate("/clients");
        } else {
            const updatedData = props.coach_clients.filter(client => (client.id === Number(props.id)))[0];
            Dispatch({ type: "UPDATE_CLIENT_DATA", payload: updatedData });
        }
    }, [props.coach_clients]);


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

    // Variables necessary for generating tables
    const workoutList = JSON.parse(JSON.stringify(props.new_program.workouts));
    const fullRowsNumber = Math.floor(workoutList.length / 7);
    const lastRowCells = workoutList.length % 7;


    const generateLastRow = () => {
        // Generates the last row of the table (including blanks)
        const tempList = JSON.parse(JSON.stringify(props.new_program.workouts));
        let lastRowList = tempList.splice((fullRowsNumber * 7), lastRowCells);
        let blankCellList = [];
        if(lastRowCells > 0) {
            for (let i = 0; i < 7 - lastRowCells; i++) {
                blankCellList.push(i);
            }
        }
        return (
            <tr className="last-row">
                {lastRowList.map(day => {
                    return (
                        <td key={day.id}>
                            <h3>Day {day.day}</h3>
                            <h4>{day.name}</h4>
                            {day.exercises.map(exercise => {
                                return (
                                    <div key={exercise.exercise_id} className="table-exercise">
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
                    {fullRowsList.map(row => {
                        return (
                            <tr className="full-row">
                                {row.map(day => {
                                    return (
                                        <td className="filled-cell">
                                            <div>
                                                <h3>Day {day.day}</h3>
                                                <h4>{day.name}</h4>
                                                {day.exercises.map(exercise => {
                                                    return (
                                                        <div className="table-exercise">
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

        {/* DESKTOP VIEW */}

        <div className="d-view-client">
            <div className="d-view-info">
                <div className="info-left">
                    <div className="back-div">
                        <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={() => goBack()} alt="back"></img>
                        <p className="back-text" onClick={() => goBack()}>Back</p>
                    </div>
                    <h2>{props.client_data.first_name} {props.client_data.last_name}</h2>
                </div>
                <div className="info-right">
                    <button className="assign-to-client-button">Assign to client</button>
                    <button className="edit-button" onClick={() => editClient()}>Edit</button>
                </div>
            </div>
            <div className="client-card">
                <img src="https://i.imgur.com/rqosIgi.png" alt="client-image"></img>
                <div className="info-div">
                    <p>{props.client_data.email}</p>
                    <p>(720) 123-4567</p>
                    <p>25 years old, male</p>
                    <p>6' 2'', 225 lbs</p>
                </div>
            </div>
            {/* {generateTable()} */}
        </div>
        <EditClient EditClientModal={EditClientModal} ToggleEditClientModal={ToggleEditClientModal} {...props}/>
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
    client_data: state.client_data,
  });
  
  export default connect(
    mapStateToProps,
  )(ClientView);