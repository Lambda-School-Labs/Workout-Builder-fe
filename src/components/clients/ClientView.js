import React, { useState, useEffect, useCallback } from "react";
import { connect } from 'react-redux';
import EDITCLIENT_D from './modals/EditClient_D';
import EDITCLIENT_M from './modals/EditClient_M';
import { useDispatch } from 'react-redux';
import ASSIGNTOCLIENT_D from "./modals/AssignToClient_D";
import ASSIGNTOCLIENT_M from "./modals/AssignToClient_M";
import ProgramPreviewElement from "../program/ProgramPreviewElement";

// mobile styling
import "./clients-mobile-styles.scss"

// desktop styling
import "./clients-desktop-styles.scss"

const ClientView = (props) => {
    const Dispatch = useDispatch();
    const [EditClientModal_D, ToggleEditClientModal_D] = useState(false);
    const [EditClientModal_M, ToggleEditClientModal_M] = useState(false);
    const [AssignToClientModal_D, ToggleAssignToClientModal_D] = useState(false);
    const [AssignToClientModal_M, ToggleAssignToClientModal_M] = useState(false);

    const goBack = () => {
        window.history.back()
    };

    // leave the page if first_name is empty - to avoid errors in case user refreshes and data resets
    const {client_data, navigate, coach_clients, id} = props;
    useEffect(() => {
        if(!client_data.first_name) {
            navigate("/clients");
        } else {
            // if this client's info is edited while on this page, update the information on this page
            const updatedData = coach_clients.filter(client => (client.id === Number(id)))[0];
            Dispatch({ type: "UPDATE_CLIENT_DATA", payload: updatedData });
        }
    }, [coach_clients, props.coach_programs, client_data.first_name, id, navigate, Dispatch]);

    
    // Get a list of the client's programs
    const listOfClientsPrograms = props.coach_programs.filter(program => program.assigned_clients.includes(props.client_data.id));

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


    const generateLastRow = (program, lastRowCells, fullRowsNumber, tableNumber) => {
        // Generates the last row of the table (including blanks)
        const tempList = JSON.parse(JSON.stringify(program.workouts));
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
                        <td key={`${tableNumber}-lastrow-${day.id}`}>
                            <h3>Day {day.day}</h3>
                            <h4>{day.name}</h4>
                            {day.exercises.map(exercise => {
                                return (
                                    <div className="table-exercise" key={`${tableNumber}-lastrow-${day.id}-${exercise.order}`}>
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
                        <td className="blank-cell" key={`${tableNumber}-blank-${idx}`}>
                        </td>
                    )
                })}
            </tr>
        )
    }

    const generateTable = (program, tableNumber) => {
        // Variables necessary for generating tables
        const workoutList = JSON.parse(JSON.stringify(program.workouts));
        const fullRowsNumber = Math.floor(workoutList.length / 7);
        const lastRowCells = workoutList.length % 7;

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
                            <tr className="full-row" key={`${tableNumber}-fullrow-${idx}`}>
                                {row.map(day => {
                                    return (
                                        <td className="filled-cell" key={`${tableNumber}-fullrow-${idx}-${day.id}`}>
                                            <div>
                                                <h3>Day {day.day}</h3>
                                                <h4>{day.name}</h4>
                                                {day.exercises.map((exercise, idx) => {
                                                    return (
                                                        <div className="table-exercise" key={`${tableNumber}-fullrow-${day.id}-${idx}-${exercise.order}`}>
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
                    {generateLastRow(program, lastRowCells, fullRowsNumber, tableNumber)}
                </tbody>
            </table>
        )
    }

    return(
        <>

        {/* MOBILE VIEW */}

        <div className="m-view-client">
            <div className="m-view-info">
                <div className="back-div">
                    <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={() => goBack()} alt="back"></img>
                    <p className="back-text" onClick={() => goBack()}>Back</p>
                </div>
                <div className="m-view-button-div">
                    <button className="assign-to-client-button" onClick={() => ToggleAssignToClientModal_M(true)}>Assign to client</button>
                    {AssignToClientModal_M ? <ASSIGNTOCLIENT_M program_id={props.id} AssignToClientModal={AssignToClientModal_M} ToggleAssignToClientModal={ToggleAssignToClientModal_M} {...props}/>
                    : <div />}
                    <button className="edit-button" onClick={() => ToggleEditClientModal_M(true)}>Edit</button>
                </div>
            </div>
            <div className="client-card">
                <img src="https://i.imgur.com/rqosIgi.png" alt="client-face"></img>
                <div className="info-div">
                    <h4>{props.client_data.first_name} {props.client_data.last_name}</h4>
                    <p>{props.client_data.email}</p>
                    <p>(720) 123-4567</p>
                    <div className="img-p">
                        <img src="https://i.imgur.com/X0EPfBY.png" alt="client-oj"></img><p>25M 225lbs 6' 2''</p>
                    </div>
                </div>
            </div>
            {listOfClientsPrograms.map((program, idx) => {
                return (
                    <div key={`programtable-${idx}`}>
                        <div className="table-title">
                            <h2>{program.name},</h2>
                            <h3>{program.phase}</h3>
                        </div>
                        {program.workouts.map(day => {
                            return (
                                <ProgramPreviewElement key={`preview-day-${day.id}`} day={day} />
                            )
                        })}
                    </div>
                )
            })}
        </div>
        {EditClientModal_M ?
        <EDITCLIENT_M EditClientModal={EditClientModal_M} ToggleEditClientModal={ToggleEditClientModal_M} {...props}/>
        : <div />}

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
                    <button className="assign-to-client-button" onClick={() => ToggleAssignToClientModal_D(true)}>Assign to client</button>
                    {AssignToClientModal_D ? <ASSIGNTOCLIENT_D program_id={props.id} AssignToClientModal={AssignToClientModal_D} ToggleAssignToClientModal={ToggleAssignToClientModal_D} {...props}/>
                    : <div />}
                    <button className="edit-button" onClick={() => ToggleEditClientModal_D(true)}>Edit</button>
                </div>
            </div>
            <div className="client-card">
                <img src="https://i.imgur.com/rqosIgi.png" alt="client-face"></img>
                <div className="info-div">
                    <p>{props.client_data.email}</p>
                    <p>(720) 123-4567</p>
                    <p>25 years old, male</p>
                    <p>6' 2'', 225 lbs</p>
                </div>
            </div>
            {listOfClientsPrograms.map((program, idx) => {
                return (
                    <div key={`programtable-${idx}`}>
                        <div className="table-title">
                            <h2>{program.name},</h2>
                            <h3>{program.phase}</h3>
                        </div>
                        {generateTable(program, idx)}
                    </div>
                )
            })}
        </div>
        {EditClientModal_D ?
            <EDITCLIENT_D EditClientModal={EditClientModal_D} ToggleEditClientModal={ToggleEditClientModal_D} {...props}/>
        : <div />}
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