import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

const AssignConfirm = (props) => {
    const Dispatch = useDispatch();

    /***** Modal methods *****/ 

    const closeModal = (e) => {
        e.stopPropagation();
        props.toggleConfirmModal(false);
    }

    function useOutsideAlerter(ref) {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
            closeModal(event);
            }
        }

        useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
            <Modal isOpen={props.confirmModal} 
            className="assign-confirm" 
            // overlayClassName="program-overaly"
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            >
                <h3>{props.thisProgram.name} assigned to client!</h3>
                <button>Done</button>
            </Modal>
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
  )(AssignConfirm);