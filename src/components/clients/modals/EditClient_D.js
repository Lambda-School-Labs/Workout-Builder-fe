import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import serverHandshake from '../../../utils/serverHandshake';

const EditClient_D = (props) => {
    const Dispatch = useDispatch();

    // Modal Code
    
    Modal.setAppElement('#root');

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleEditClientModal(false);
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

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    // Client code

    const initialClientData = {
        id: props.client_data.id,
        first_name: props.client_data.first_name,
        last_name: props.client_data.last_name,
        email: props.client_data.email
    };

    const [updatedClientData, setUpdatedClientData] = useState(initialClientData);

    useEffect(() => {
        setUpdatedClientData(props.client_data);
    },[props.client_data]);

    const handleChange = (e) => {
        e.preventDefault();
        setUpdatedClientData ({
        ...updatedClientData,
        [e.target.name]: e.target.value
        });
    };

    const updateClient = (e) => {
        e.preventDefault();

        // hard copy data and remove the id
        let updatedInfo = JSON.parse(JSON.stringify(updatedClientData));
        delete updatedInfo.id;

        serverHandshake(true).put(`/clients/${updatedClientData.id}`, updatedInfo)
        .then(res => {
            serverHandshake(true).get("/clients")
            .then(res => {
                Dispatch({ type: 'SET_CLIENT_DATA', payload: res.data });
            })
        })
        .catch(err => {
            console.log("there was an error", err);
        })

        closeModal(e);
    };

    return(
            <div 
                // isOpen={props.EditClientModal} 
                className="client-modal" 
                // overlayClassName="client-overaly"
                // shouldCloseOnOverlayClick={true}
                // onRequestClose={closeModal}
                ref={wrapperRef}
                >
                <form onSubmit={updateClient}>
                    <h3>Edit Client Data</h3>
                    <div className="profile-row">
                        <p htmlFor="picture">Profile picture (url):</p>
                        <input id="picture" name="picture" placeholder="https://i.imgur.com/1zfsBE6.png" type="url"></input>
                    </div>
                    <div className="create-client-row">
                        <div className="create-client-left">
                            <div className="label-div">
                                <p htmlFor="first_name">First Name</p><p className="asterix">*</p>
                            </div>
                            <input id="first_name" name="first_name" placeholder="" required type="text" value={updatedClientData.first_name} onChange={handleChange}></input>
                        </div>
                        <div className="create-client-right">
                            <div className="label-div">
                                <p htmlFor="last_name">Last Name</p><p className="asterix">*</p>
                            </div>
                            <input id="last_name" name="last_name" placeholder="" required type="text" value={updatedClientData.last_name} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="create-client-row">
                        <div className="vertical">
                            <div className="label-div">
                                <p htmlFor="email">Email</p><p className="asterix">*</p>
                            </div>
                            <input id="email" name="email" placeholder="" required type="email" value={updatedClientData.email} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="create-client-row">
                        <div className="vertical">
                            <p htmlFor="phone">Phone</p>
                            <input id="phone" name="phone" placeholder="" type="tel"></input>
                        </div>
                    </div>
                    <div className="create-client-row">
                        <div className="create-client-left">
                            <p htmlFor="height">Height</p>
                            <div className="split-div">
                                <input id="height" name="height" placeholder="ft" type="number"></input>
                                <input id="height" name="height" placeholder="in" type="number"></input>
                            </div>
                        </div>
                        <div className="create-client-right">
                            <p htmlFor="weight">Weight</p>
                            <input id="weight" name="weight" placeholder="lbs" type="text"></input>
                        </div>
                    </div>
                    <div className="create-client-row">
                        <div className="create-client-left">
                            <p htmlFor="birthday">Birthday</p>
                            <input id="birthday" name="birthday" type="date"></input>
                        </div>
                        <div className="create-client-right">
                            <p htmlFor="gener">Gender</p>
                            <input id="gender" name="gender" type="text"></input>
                        </div>
                    </div>
                    <div className="button-row">
                        <button onClick={closeModal} className="cancel-button">Cancel</button>
                        <button className="save-button" type="submit">Save Edits</button>
                    </div>
                </form>
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
    client_data: state.client_data
});

export default connect(
    mapStateToProps,
)(EditClient_D);