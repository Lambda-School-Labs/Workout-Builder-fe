import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const ProgramOptions = (props) => {
    const Dispatch = useDispatch();

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleProgramOptionsModal(false);
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

    // Delete a program from the list and the redux store
    const deleteProgram = (e) => {
        Dispatch({ type: "DELETE_A_PROGRAM", payload: props.program_id });
        Dispatch({ type: "UPDATE" });
        closeModal(e);
    }
    
    // Duplicate a program from the list and add it to the redux store
    const duplicateProgram = (e) => {
        // This is the current program for which the options menu is being displayed
        const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];
        const newProgram = {...thisProgram, name: `${thisProgram.name} (copy)`, assigned_clients: []};

        Dispatch({ type: "CREATE_A_PROGRAM", payload: newProgram });
        Dispatch({ type: "UPDATE" });
        closeModal(e);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
            <div className="options-modal">
                    <div ref={wrapperRef}>
                    <div className="options-element">
                        <div className="options-left">
                            <img src="https://i.imgur.com/L3ARWfG.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Edit</p>
                        </div>
                    </div>
                    <div className="options-element" onClick={duplicateProgram}>
                        <div className="options-left">
                            <img src="https://i.imgur.com/DZgRwQr.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Duplicate</p>
                        </div>
                    </div>
                    <div className="options-element" onClick={deleteProgram}>
                        <div className="options-left">
                            <img src="https://i.imgur.com/xsHoyAy.png"></img>
                        </div>
                        <div className="options-right">
                            <p>Delete Program</p>
                        </div>
                    </div>
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
  )(ProgramOptions);