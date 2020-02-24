import React from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const PhaseInput = (props) => {
    const Dispatch = useDispatch();

    const updatePhase = (e) => {
        e.preventDefault();

        // find index of workout and index of the exercise
        let updatedProgram = JSON.parse(JSON.stringify(props.new_program));

        // update the exercise details
        updatedProgram.phase = e.target.value;

        // update the program data in redux
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    }

    return (
        <input value={props.new_program.phase} onChange={updatePhase} required></input>
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
)(PhaseInput);