import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ProgramOptions from './modals/ProgramOptions';

const ProgramListElement = (props) => {
    const [AssignProgramModal, ToggleAssignProgramModal] = useState(false);
    const [ProgramOptionsModal, ToggleProgramOptionsModal] = useState(false);

    return(
        <div class="program-element">
            <div class="checkbox-div">
                <img src="https://i.imgur.com/tKDzdPT.png"></img>
            </div>
            <div class="title-div">
                <p>{props.title}</p>
            </div>
            <div class="active-div">
                <p>{props.activeUsers}</p>
            </div>
            <div class="assign-div">
                <img src="https://i.imgur.com/4Qxt7a2.png"></img>
            </div>
            <div className="options-div" onClick={() => ToggleProgramOptionsModal(true)} id={`options-div-${props.id}`}>
                <img src="https://i.imgur.com/DPz3fj4.png"></img>
                <ProgramOptions ProgramOptionsModal={ProgramOptionsModal} ToggleProgramOptionsModal={ToggleProgramOptionsModal} id={props.id}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramListElement);