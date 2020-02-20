import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ProgramOptions from './modals/ProgramOptions';
import AssignProgram from './modals/AssignProgram';

const ProgramListElement = (props) => {
  const [AssignProgramModal, ToggleAssignProgramModal] = useState(false);
  const [ProgramOptionsModal, ToggleProgramOptionsModal] = useState(false);

  return(
    <div className="program-element">
      <div className="checkbox-div">
        <img src="https://i.imgur.com/tKDzdPT.png"></img>
      </div>
      <div className="title-div">
        <p>{props.title}</p>
      </div>
      <div className="active-div">
        <p>{props.activeUsers}</p>
      </div>
      <div className="assign-div" id={`assign-div-${props.id}`}>
        <img src="https://i.imgur.com/4Qxt7a2.png" onClick={() => ToggleAssignProgramModal(true)}></img>
        {AssignProgramModal ? <AssignProgram program_id={props.id} AssignProgramModal={AssignProgramModal} ToggleAssignProgramModal={ToggleAssignProgramModal} id={props.id} {...props}/>
          : <div />}
      </div>
      <div className="options-div" id={`options-div-${props.id}`}>
        <img src="https://i.imgur.com/DPz3fj4.png" onClick={() => ToggleProgramOptionsModal(true)}></img>
        {ProgramOptionsModal ? <ProgramOptions program_id={props.id} ProgramOptionsModal={ProgramOptionsModal} ToggleProgramOptionsModal={ToggleProgramOptionsModal} id={props.id} {...props}/>
          : <div />}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  updates: state.updates,
  coach_clients: state.coach_clients,
  coach_exercises: state.coach_exercises,
  coach_programs: state.coach_programs,
});

export default connect(
  mapStateToProps,
)(ProgramListElement);