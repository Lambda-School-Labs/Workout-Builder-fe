import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import serverHandshake from '../../../utils/serverHandshake';

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
        const defaultProgram = {id: 0, name: "", description: "test", coach_id: 1, length: 0, phase: "",
        workouts: [],
        assigned_clients: []
        }

        // delete the program id, assigned_clients fields and add a test value to description prior to sending to the back end
        let newProgram = JSON.parse(JSON.stringify(props.new_program));
        delete newProgram.id;
        delete newProgram.assigned_clients;
        delete newProgram.coach_id;
        newProgram.description = "test";

        // delete the workout ids
        newProgram.workouts.forEach(workout => {
            delete workout.id;
        })

        console.log(newProgram);

        serverHandshake(true).post("/programs", newProgram)
        .then(res => {
            Dispatch({ type: 'SET_PROGRAM_DATA', payload: res.data });
            Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
            props.toggleConfirmModal(false);
            props.navigate("/program");
        })
        .catch(err => {
            console.log("there was an error", err);
        })
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