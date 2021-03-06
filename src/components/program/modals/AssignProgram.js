import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import AssignConfirm from './AssignConfirm';
import serverHandshake from '../../../utils/serverHandshake';

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
    const [clientsToAdd, setClientsToAdd] = useState([]);
    const [clientsToRemove, setClientsToRemove] = useState([]);

    const isChecked = (client_id) => {
        // function to determine if a box should be checked for each client name
        if (clientList.includes(client_id)) {
            return "checked";
        } else {
            return "";
        }
    }

    // useEffect(() => {
    //     console.log("Client List", clientList);
    //     console.log("Clients To Add", clientsToAdd);
    //     console.log("Clients To Remove", clientsToRemove);
    // }, [clientList]);
  
    const toggleAssign = (client_id) => {
        // function to check / uncheck boxes and determine which clients have to be added / removed
        if (clientList.includes(client_id)) {
            // remove client from the local client list
            let tempList = [...clientList];
            const index = clientList.indexOf(client_id);
            tempList.splice(index, 1);
            setClientList(tempList);

            // remove the client from the clientsToAdd list (if it's there)
            let tempAddList = [...clientsToAdd];
            if (tempAddList.includes(client_id)) {
                const indexAdd = tempAddList.indexOf(client_id);
                tempAddList.splice(indexAdd, 1);
                setClientsToAdd(tempAddList);
            } else {
                // otherwise add the client to the clientsToRemove list
                let tempRemoveList = [...clientsToRemove];
                tempRemoveList.push(client_id);
                setClientsToRemove(tempRemoveList);
            }
        } else {
            // add client to local client list
            let tempList = [...clientList];
            tempList.push(client_id);
            setClientList(tempList);

            // remove the client from the clientsToRemove list (if it's there)
            let tempRemoveList = [...clientsToRemove];
            if (tempRemoveList.includes(client_id)) {
                const indexRemove = tempRemoveList.indexOf(client_id);
                tempRemoveList.splice(indexRemove, 1);
                setClientsToRemove(tempRemoveList);
            } else {
                // add the client to the clientsToAdd list
                let tempAddList = [...clientsToAdd];
                tempAddList.push(client_id);
                setClientsToAdd(tempAddList);
            }
            
        }
    }

    // function to update the redux data
    const assignToClient = (e) => {
        // send a post request if there are clients to add
        if (clientsToAdd.length > 0) {
            const payload = {
                program_id: props.program_id,
                client_ids: clientsToAdd
            }
            serverHandshake(true).post("/clients-programs", payload)
            .then(res => {
            })
            .catch(err => {
                console.log("there was an error", err);
            })
        }

        // send delete requests for each client to delete
        if (clientsToRemove.length > 0) {
            clientsToRemove.forEach(clientRemoveID => {
                const payload = {
                    program_id: props.program_id,
                    client_id: clientRemoveID
                }
                serverHandshake(true).delete("/clients-programs", {data: payload})
                .then(res => {
                })
                .catch(err => {
                    console.log("there was an error", err);
                })
            })
        }

        // get new program data
        setTimeout(() => {
            serverHandshake(true).get('/programs')
            .then(res => {
                Dispatch({ type: 'SET_PROGRAM_DATA', payload: res.data });
            })
            .catch(err => {
                console.log("there was an error", err);
            })
        }, 1000);

        toggleConfirmModal(true)
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