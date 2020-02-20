import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

// mobile styling - desktop can be done in tailwind
import "./program-mobile-styles.scss"
import ProgramPreviewElement from "./ProgramPreviewElement";

const ProgramPreview = (props) => {
    const Dispatch = useDispatch();

    const goBack = () => {
        window.history.back()
    };

    // leave the page if name is empty - to avoid errors in case user refreshes and data resets
    useEffect(() => {
        if(props.new_program.name === "") {
            props.navigate("/program");
        }
    }, []);

    return(
        <div className="program-preview">
            <div className="back-div">
                <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={() => goBack()}></img>
                <p className="back-text" onClick={() => goBack()}>Back</p>
            </div>
            <h3 className="program-preview-title">{props.new_program.name}</h3>
            {props.new_program.workouts.map(day => {
                return (
                    <ProgramPreviewElement day={day} />
                )
            })}
        </div>
        
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
    new_program: state.new_program,
    temp_next_workout_id: state.temp_next_workout_id,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramPreview);