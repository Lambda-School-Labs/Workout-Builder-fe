import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

const PublishConfirm = (props) => {
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

    const publishExercise = () => {
        const defaultProgram = {id: 0, name: "", description: "", coach_id: 1, length: 0, phase: "",
        workouts: [ ],
        assigned_clients: []
        }

        props.toggleConfirmModal(false);
        Dispatch({ type: "CREATE_A_PROGRAM", payload: props.new_program });
        Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
        props.navigate("/programs");
    }

    return(
            <Modal isOpen={props.confirmModal} 
            className="confirm-modal" 
            overlayClassName="confirm-modal-overaly"
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            onAfterClose={() => publishExercise()}
            >
                <h3>{props.thisProgram.name} published!</h3>
                <button onClick={closeModal}>Done</button>
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
  )(PublishConfirm);