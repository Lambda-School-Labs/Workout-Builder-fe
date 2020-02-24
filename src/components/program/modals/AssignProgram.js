import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import AssignConfirm from './AssignConfirm';

const AssignProgram = (props) => {
    const Dispatch = useDispatch();
    
    /***** Modal methods *****/ 
    const [confirmModal, toggleConfirmModal] = useState(false);

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleAssignProgramModal(false);
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


    /***** Assigning methods *****/ 

    // This is the current program for which the assign list is being displayed
    const thisProgram = props.coach_programs.filter(program => program.id === props.program_id)[0];

    const [clientList, setClientList] = useState([...thisProgram.assigned_clients]);

    const isChecked = (client_id) => {
        // function to determine if a box should be checked for each client name
        if (clientList.includes(client_id)) {
            return "checked";
        } else {
            return "";
        }
    }

  
    const toggleAssign = (client_id) => {
        // function to check / uncheck boxes
        if (clientList.includes(client_id)) {
            // remove client
            let tempList = [...clientList];
            const index = clientList.indexOf(client_id);
            tempList.splice(index, 1);
            setClientList(tempList);
        } else {
            // add client
            let tempList = [...clientList];
            tempList.push(client_id);
            setClientList(tempList);
        }
    }

    // function to update the redux data
    const assignToClient = (e) => {
        const updatedProgram = {...thisProgram, assigned_clients: clientList};
        Dispatch({ type: "UPDATE_A_PROGRAM", payload: updatedProgram });
        Dispatch({ type: "UPDATE" });
        toggleConfirmModal(true);
    }

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
                                <div key={client.id} className="assign-clients-row" id={`assign-client-${client.id}`}>
                                        <label className="assign-client-container">
                                            <input type="checkbox" checked={isChecked(client.id)} onChange={() => toggleAssign(client.id)}/>
                                            {/* checked={isChecked(client.id)} */}
                                            {client.first_name} {client.last_name}
                                        </label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="assign-button-div">
                        <button className="assign-button" onClick={assignToClient}>Assign to client</button>
                    </div>
                    {confirmModal ? <AssignConfirm thisProgram={thisProgram} 
                    confirmModal={confirmModal} toggleConfirmModal={toggleConfirmModal} {...props}/>
                    : <div />}
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
)(AssignProgram);