import React, { useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

const emptyForm = {
  name: "",
  phase: "",
  length: null
};

const CreateProgram = (props) => {
  const Dispatch = useDispatch();

  Modal.setAppElement('#root');

  const closeModal = (e) => {
    e.stopPropagation();
    props.ToggleCreateProgramModal(false);
  };

  const [newProgramData, setNewProgramData] = useState(emptyForm);

  const handleChange = (e) => {
    e.preventDefault();
    setNewProgramData ({
      ...newProgramData,
      [e.target.name]: e.target.value
    });
  };

    const openProgramCreationPage = e => {
      const defaultProgram = {id: 0, name: "", description: "test", coach_id: 1, length: 0, phase: "",
      workouts: [],
      assigned_clients: []
      }
      e.preventDefault();
      props.navigate("/program/create");
      closeModal(e);
      // reset new program data
      Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
      // update redux with entered data
      Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: newProgramData });
      Dispatch({ type: "UPDATE" });
  };

    return(
            <Modal isOpen={props.CreateProgramModal} 
                className="program-modal" 
                overlayClassName="program-overaly"
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                // parentSelector={() => document.body.querySelector('.main-title')}
                >
                
                <h3>Create Program</h3>
                <form onSubmit={openProgramCreationPage}>
                    <div className="create-row"><p htmlFor="name">Program Name</p><p className="asterix">*</p></div>
                    <input id="name" name="name" placeholder="Ex: Olympic Lifting" required type="text" value={newProgramData.program_name} onChange={handleChange}></input>
                    <div className="create-row"><p htmlFor="phase">Phase</p><p className="asterix">*</p></div>
                    <input id="phase" name="phase" placeholder="Ex: Strength" required type="text" value={newProgramData.program_phase} onChange={handleChange}></input>
                    <div className="create-row"><p htmlFor="length">Number of days in program</p><p className="asterix">*</p></div>
                    <input id="length" name="length" placeholder="Ex: 21" required type="number" value={newProgramData.program_days} onChange={handleChange}></input>
                    <p className="legend-p">*Required</p>
                    <div className="program-button-div">
                        <button className="save-button" type="submit">Save</button>
                        <button onClick={closeModal} className="cancel-button">Cancel</button>
                    </div>
                </form>
            </Modal>
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
)(CreateProgram);