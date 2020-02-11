import React, { useState } from "react";
import { connect } from 'react-redux';
import Modal from 'react-modal';

const CreateProgram = (props) => {
    Modal.setAppElement('#root');

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleCreateProgramModal(false);
    }

    return(
            <Modal isOpen={props.CreateProgramModal} 
                className="program-modal" 
                overlayClassName="program-overaly"
                shouldCloseOnOverlayClick={true}
                onRequestClose={closeModal}
                // parentSelector={() => document.body.querySelector('.main-title')}
                >
                
                <h3>Create Program</h3>
                <form>
                    <p htmlFor="program-name">Program Name *</p>
                    <input id="program-name" placeholder="Ex: Olympic Lifting"></input>
                    <p htmlFor="program-phase">Phase *</p>
                    <input id="program-phase" placeholder="Ex: Strength"></input>
                    <p htmlFor="program-days">Number of days in program *</p>
                    <input id="program-days" placeholder="Ex: 21"></input>
                </form>
                <div className="program-button-div">
                    <button onClick={closeModal} className="cancel-button">Cancel</button>
                    <button onClick={closeModal} className="create-button">+ Create program</button>
                </div>
                <p className="legend-p">*Required</p>
            </Modal>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
  });
  
  export default connect(
    mapStateToProps,
  )(CreateProgram);