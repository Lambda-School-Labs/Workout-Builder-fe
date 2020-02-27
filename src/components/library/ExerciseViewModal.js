import React, { useEffect, useRef } from "react";
import {connect} from 'react-redux';
import { navigate } from "@reach/router";

import {deleteExercise,duplicateExercise} from '../actions';

const ExerciseViewModal = (props) => {

  const closeModal = (e) => {
    e.stopPropagation();
    props.ToggleExModal(false);
  };

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

  const deleteExercise = (e) => {
    // console.log("In the exercise view modal and clicked on deleteExercise");
    props.deleteExercise(props.exerObj.id);
    closeModal(e);
  };

  const editExercise = (e) => {
    // console.log("In the exercise view modal and clicked on editExercise");
    closeModal(e);
    navigate(`/library/${props.exerObj.id}/edit`);
  };

  const duplicateExercise = (e) => {
    // This is the current program for which the options menu is being displayed
    // const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];
    // const newProgram = {...thisProgram, name: `${thisProgram.name} (copy)`, assigned_clients: []};

    // Dispatch({ type: "CREATE_A_PROGRAM", payload: newProgram });

    // Dispatch({ type: "UPDATE" });

    // console.log("In the exercise view modal and clicked on duplicateExercise",props.exerObj);
    const dupObj = {...props.exerObj};
    delete dupObj.id;
    props.duplicateExercise(dupObj);
    closeModal(e);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return(
    <div className="options-modal">
      <div ref={wrapperRef}>

        <div className="options-element" onClick={editExercise}>
          <div className="options-left">
            <img src="https://i.imgur.com/VDEt22i.png" alt="edit"></img>
          </div>
          <div className="options-right">
            <p>Edit</p>
          </div>
        </div>

        <div className="options-element" onClick={duplicateExercise}>
          <div className="options-left">
            <img src="https://i.imgur.com/DZgRwQr.png" alt="duplicate"></img>
          </div>
          <div className="options-right">
            <p>Duplicate</p>
          </div>
        </div>

        <div className="options-element" onClick={deleteExercise}>
          <div className="options-left">
            <img src="https://i.imgur.com/xsHoyAy.png" alt="delete"></img>
          </div>
          <div className="options-right">
            <p>Delete Exercise</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default connect(null,{deleteExercise,duplicateExercise})(ExerciseViewModal);