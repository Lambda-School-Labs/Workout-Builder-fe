import React, { useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import serverHandshake from '../../../utils/serverHandshake';

const ClientOptions = (props) => {
    const Dispatch = useDispatch();

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleClientOptionsModal(false);
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

    const deleteClient = (e) => {
        // Delete a client from the back end and your list
        serverHandshake(true).delete(`/clients/${props.client.id}`)
        .then(res => {
            // get a new list of clients
            serverHandshake(true).get('/clients')
            .then(res => {
                Dispatch({ type: 'SET_CLIENT_DATA', payload: res.data });
                // get a new list of programs (updated for deleted client)
                serverHandshake(true).get('/programs')
                .then(res => {
                    Dispatch({ type: 'SET_PROGRAM_DATA', payload: res.data });
                })
                .catch(err => {
                    console.log("there was an error", err);
                })
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


    const duplicateClient = (e) => {
        const duplicateClient = {
            first_name: props.client.first_name,
            last_name: props.client.last_name,
            email: "copy-" + props.client.email
        }
        serverHandshake(true).post("/clients", duplicateClient)
        .then(res => {
            serverHandshake(true).get('/clients')
            .then(res => {
                Dispatch({ type: 'SET_CLIENT_DATA', payload: res.data });
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

    const editClient = (e) => {
        const clientToEdit = {
            id: props.client.id,
            first_name: props.client.first_name,
            last_name: props.client.last_name,
            email: props.client.email
        }
        Dispatch({ type: 'UPDATE_CLIENT_DATA', payload: clientToEdit });
        props.ToggleEditClientModal(true);
        closeModal(e);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

        return(
        <div className="options-modal">
                <div ref={wrapperRef}>
                <div className="options-element" onClick={editClient}>
                    <div className="options-left">
                        <img src="https://i.imgur.com/VDEt22i.png" alt="edit"></img>
                    </div>
                    <div className="options-right">
                        <p>Edit</p>
                    </div>
                </div>
                <div className="options-element" onClick={duplicateClient}>
                    <div className="options-left">
                        <img src="https://i.imgur.com/DZgRwQr.png" alt="duplicate"></img>
                    </div>
                    <div className="options-right">
                        <p>Duplicate</p>
                    </div>
                </div>
                <div className="options-element" onClick={deleteClient}>
                    <div className="options-left">
                        <img src="https://i.imgur.com/xsHoyAy.png" alt="delete"></img>
                    </div>
                    <div className="options-right">
                        <p>Delete Client</p>
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
    client_data: state.client_data
});

export default connect(
    mapStateToProps,
)(ClientOptions);