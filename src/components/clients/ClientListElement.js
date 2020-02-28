import React, { useState } from "react";
import { connect } from 'react-redux';

const ClientListElement = (props) => {

    const [ClientOptionsModal, ToggleClientOptionsModal] = useState(false);

    const [checked, setChecked] = useState(false);

    const viewClient = () => {
        // Set the program to new program data and view it in the preview page
        // Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: props.program });
        console.log("viewing clinet");
        // props.navigate("/program/preview");
    }


    return(
        <div className="client-element">
            <div className="pic-div">
                <img src="https://i.imgur.com/1zfsBE6.png" alt="client-image" onClick={() => viewClient()}></img>
            </div>
            <div className="name-div">
                <p onClick={() => viewClient()}>{props.first_name}</p>
                <p onClick={() => viewClient()}>{props.last_name}</p>
            </div>
            <div className="days-div">
                <div className="days-highlight">
                    <p>21 days left</p>
                </div>
            </div>
            <div className="actions-div" id={`actions-div-${props.id}`}>
                {/* <img className="vertical-dots" src="https://i.imgur.com/DPz3fj4.png" onClick={() => ToggleProgramOptionsModal(true)} alt="options-v"></img> */}
                <img className="horizontal-dots" src="https://i.imgur.com/NOM7XwR.png" onClick={() => ToggleClientOptionsModal(true)} alt="options-h"></img>
                {/* {ProgramOptionsModal ? <ProgramOptions program_id={props.id} ProgramOptionsModal={ProgramOptionsModal} ToggleProgramOptionsModal={ToggleProgramOptionsModal} id={props.id} {...props}/>
                : <div />} */}
            </div>
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
)(ClientListElement);