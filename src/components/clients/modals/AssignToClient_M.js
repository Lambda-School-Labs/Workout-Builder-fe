import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import serverHandshake from '../../../utils/serverHandshake';
import AssignProgramsConfirm from "./AssignProgramsConfirm";

const AssignToClient_M = (props) => {
    const Dispatch = useDispatch();
    
    /***** Modal methods *****/ 
    const [confirmModal, toggleConfirmModal] = useState(false);

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleAssignToClientModal(false);
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

    // Get a list of the client's programs
    const listOfClientsPrograms = props.coach_programs.filter(program => program.assigned_clients.includes(props.client_data.id));
    const simplifiedProgramList = listOfClientsPrograms.map(program => {
        return (program.id)
    });

    const [programList, setProgramList] = useState(simplifiedProgramList);
    const [programsToAdd, setProgramsToAdd] = useState([]);
    const [programsToRemove, setProgramsToRemove] = useState([]);

    const isChecked = (program_id) => {
        // function to determine if a box should be checked for each program name
        if (programList.includes(program_id)) {
            return "checked";
        } else {
            return "";
        }
    }
  
    const toggleAssign = (program_id) => {
        // function to check / uncheck boxes and determine which programs have to be added / removed
        if (programList.includes(program_id)) {
            // remove program from the local program list
            let tempList = [...programList];
            const index = programList.indexOf(program_id);
            tempList.splice(index, 1);
            setProgramList(tempList);

            // remove the program from the programsToAdd list (if it's there)
            let tempAddList = [...programsToAdd];
            if (tempAddList.includes(program_id)) {
                const indexAdd = tempAddList.indexOf(program_id);
                tempAddList.splice(indexAdd, 1);
                setProgramsToAdd(tempAddList);
            } else {
                // otherwise add the program to the programsToRemove list
                let tempRemoveList = [...programsToRemove];
                tempRemoveList.push(program_id);
                setProgramsToRemove(tempRemoveList);
            }
        } else {
            // add program to local program list
            let tempList = [...programList];
            tempList.push(program_id);
            setProgramList(tempList);

            // remove the program from the programsToRemove list (if it's there)
            let tempRemoveList = [...programsToRemove];
            if (tempRemoveList.includes(program_id)) {
                const indexRemove = tempRemoveList.indexOf(program_id);
                tempRemoveList.splice(indexRemove, 1);
                setProgramsToRemove(tempRemoveList);
            } else {
                // add the program to the programsToAdd list
                let tempAddList = [...programsToAdd];
                tempAddList.push(program_id);
                setProgramsToAdd(tempAddList);
            }
            
        }
    }

    // function to update the redux data
    const assignProgramsToClient = (e) => {
        // send a post request if there are programs to add
        if (programsToAdd.length > 0) {
            programsToAdd.forEach(programAddID => {
                const payload = {
                    program_id: programAddID,
                    client_ids: [props.client_data.id]
                }
                serverHandshake(true).post("/clients-programs", payload)
                .then(res => {
                })
                .catch(err => {
                    console.log("there was an error", err);
                })
            })
        }

        // send delete requests for each program to delete
        if (programsToRemove.length > 0) {
            programsToRemove.forEach(programRemoveID => {
                const payload = {
                    program_id: programRemoveID,
                    client_id: props.client_data.id
                }
                serverHandshake(true).delete("/clients-programs", {data: payload})
                .then(res => {
                })
                .catch(err => {
                    console.log("there was an error", err);
                })
            })
        }

        serverHandshake(true).get('/programs')
        .then(res => {
            Dispatch({ type: 'SET_PROGRAM_DATA', payload: res.data });
        })
        .catch(err => {
            console.log("there was an error", err);
        })

        toggleConfirmModal(true);
    }

    return(
        <div 
            // isOpen={props.AssignToClientModal} 
            className="assign-modal-m" 
            // overlayClassName="client-overaly"
            // shouldCloseOnOverlayClick={true}
            // onRequestClose={closeModal}
            ref={wrapperRef}
            >
            <div className="assign-internal">
                <div className="assign-header"><h2>Assign Programs</h2></div>
                <div className="assign-programs" style={{}}>
                    {props.coach_programs.map(program => {
                        return(
                            <div key={program.id} className="assign-programs-row" id={`assign-program-${program.id}`}>
                                    <label className="assign-program-container">
                                        <input type="checkbox" checked={isChecked(program.id)} onChange={() => toggleAssign(program.id)}/>
                                        {program.name}
                                    </label>
                                    <p>{program.length} days</p>
                            </div>
                        )
                    })}
                </div>
                <div className="assign-button-div">
                    <button className="cancel-button" onClick={closeModal}>Cancel</button>
                    <button className="assign-button" onClick={assignProgramsToClient}>Assign</button>
                </div>
                {confirmModal ? <AssignProgramsConfirm
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
    client_data: state.client_data,
});

export default connect(
    mapStateToProps,
)(AssignToClient_M);