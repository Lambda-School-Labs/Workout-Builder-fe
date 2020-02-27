import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import serverHandshake from '../../../utils/serverHandshake';

const ProgramOptions = (props) => {
  const Dispatch = useDispatch();

  const closeModal = (e) => {
    e.stopPropagation();
    props.ToggleProgramOptionsModal(false);
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

  const defaultProgram = {id: 0, name: "", description: "test", coach_id: 1, length: 0, phase: "",
        workouts: [],
        assigned_clients: []
        }

  const deleteProgram = (e) => {
    // Delete a program from the list and the redux store
    serverHandshake(true).delete(`/programs/${props.program_id}`)
    .then(res => {
        serverHandshake(true).get('/programs')
        .then(res => {
          Dispatch({ type: 'SET_PROGRAM_DATA', payload: res.data });
          Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
        })
        .catch(err => {
          console.log("there was an error", err);
        })
    })
    .catch(err => {
        console.log("there was an error", err);
    })
    closeModal(e);
  };


  const duplicateProgram = (e) => {
    // Duplicate a program from the list and send it to the back end as a new program
    // This is the current program for which the options menu is being displayed
    const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];
    // Create a hard copy and change the name
    let newProgram = JSON.parse(JSON.stringify(thisProgram));
    newProgram.name = `${thisProgram.name} (copy)`;
    // delete the program id, assigned_clients fields and add a test value to description prior to sending to the back end
    delete newProgram.id;
    delete newProgram.assigned_clients;
    delete newProgram.coach_id;
    newProgram.description = "test";
    // delete the workout ids
    newProgram.workouts.forEach(workout => {
        delete workout.id;
    })
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
    closeModal(e);
  };

  const editProgram = (e) => {
    // This is the current program for which the options menu is being displayed
    const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];

    // Set current program data to new program data
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: thisProgram });

    closeModal(e);
    props.navigate("/program/edit");
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

    return(
      <div className="options-modal">
              <div ref={wrapperRef}>
              <div className="options-element" onClick={editProgram}>
                  <div className="options-left">
                      <img src="https://i.imgur.com/VDEt22i.png" alt="edit"></img>
                  </div>
                  <div className="options-right">
                      <p>Edit</p>
                  </div>
              </div>
              <div className="options-element" onClick={duplicateProgram}>
                  <div className="options-left">
                      <img src="https://i.imgur.com/DZgRwQr.png" alt="duplicate"></img>
                  </div>
                  <div className="options-right">
                      <p>Duplicate</p>
                  </div>
              </div>
              <div className="options-element" onClick={deleteProgram}>
                  <div className="options-left">
                      <img src="https://i.imgur.com/xsHoyAy.png" alt="delete"></img>
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