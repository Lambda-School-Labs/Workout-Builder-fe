import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const AssignProgram = (props) => {
  // adding redux dispatch capabilities
  const Dispatch = useDispatch();

  // closing the modal function
  const closeModal = (e) => {
    e.stopPropagation();
    props.ToggleAssignProgramModal(false);
  };

  // function that determines if outside the modal was clicked
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

  // part of useOutsideAlerter functionality
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // function to determine if a box should be checked for each client name
  const isChecked = (client_id) => {
    // This is the current program for which the assign list is being displayed
    const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];

    // if the client's id is included in the assigned_clients field of the current program, mark the box checked
    if (thisProgram.assigned_clients.includes(client_id)) {
      return "checked";
    } else {
      return "";
    }
  };

  // function to check / uncheck boxes and update the redux data
  const toggleAssign = (client_id) => {
    // This is the current program for which the assign list is being displayed
    const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];

    // Get the array of assigned clients
    const listOfClients = thisProgram.assigned_clients;

    if (listOfClients.includes(client_id)) {
      // remove client
      const index = listOfClients.indexOf(client_id);
      listOfClients.splice(index, 1);
      const updatedProgram = {...thisProgram, assigned_clients: listOfClients};

      Dispatch({ type: "UPDATE_A_PROGRAM", payload: updatedProgram });
    } else {
      // add client
      listOfClients.push(client_id);
      const updatedProgram = {...thisProgram, assigned_clients: listOfClients};

      Dispatch({ type: "UPDATE_A_PROGRAM", payload: updatedProgram });
    }
  };

  return(
    <div className="assign-modal">
      <div ref={wrapperRef} className="assign-internal">
        <div className="assign-header">
          <div className="assign-header-clients">Clients</div>
          <div className="assign-header-teams">Teams</div>
        </div>
        <div className="assign-clients" style={{}}>
          {props.coach_clients.map(client => {
            return(
              <div className="assign-clients-row" id={`assign-client-${client.id}`}>
                <label class="assign-client-container">
                  <input type="checkbox" checked={isChecked(client.id)} onClick={() => toggleAssign(client.id)}/>
                  {/* checked={isChecked(client.id)} */}
                  {client.first_name} {client.last_name}
                </label>
              </div>
            );
          })}
        </div>
        <div className="assign-button-div">
          <button className="assign-button" onClick={closeModal}>Assign to client</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  updates: state.updates,
  coach_clients: state.coach_clients,
  coach_exercises: state.coach_exercises,
  coach_programs: state.coach_programs,
});

export default connect(
  mapStateToProps,
)(AssignProgram);