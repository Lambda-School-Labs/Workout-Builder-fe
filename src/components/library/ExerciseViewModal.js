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
    // console.log("In the exercise view modal and clicked on duplicateExercise",props.exerObj);
    const dupObj = {...props.exerObj};
    delete dupObj.id;
    props.duplicateExercise(dupObj);
    closeModal(e);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return(
    <div className="bf-options-modal">
      <div ref={wrapperRef}>

        <div className="bf-options-element" onClick={editExercise}>
          <div className="bf-options-left">
            <img src="https://i.imgur.com/VDEt22i.png" alt="edit"></img>
          </div>
          <div className="bf-options-right">
            <p>Edit</p>
          </div>
        </div>

        <div className="bf-options-element" onClick={duplicateExercise}>
          <div className="bf-options-left">
            <img src="https://i.imgur.com/DZgRwQr.png" alt="duplicate"></img>
          </div>
          <div className="bf-options-right">
            <p>Duplicate</p>
          </div>
        </div>

        <div className="bf-options-element" onClick={deleteExercise}>
          <div className="bf-options-left">
            <img src="https://i.imgur.com/xsHoyAy.png" alt="delete"></img>
          </div>
          <div className="bf-options-right">
            <p>Delete Exercise</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default connect(null,{deleteExercise,duplicateExercise})(ExerciseViewModal);