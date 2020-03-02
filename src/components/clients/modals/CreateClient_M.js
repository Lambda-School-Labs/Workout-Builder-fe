import React, { useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import serverHandshake from '../../../utils/serverHandshake';

const emptyForm = {
    first_name: "",
    last_name: "",
    email: ""
};

const CreateClient_M = (props) => {
    const Dispatch = useDispatch();
    
    Modal.setAppElement('#root');

    const closeModal = (e) => {
        e.stopPropagation();
        props.ToggleAddClientModal(false);
    };

    const [newClientData, setNewClientData] = useState(emptyForm);

    const handleChange = (e) => {
        e.preventDefault();
        setNewClientData ({
        ...newClientData,
        [e.target.name]: e.target.value
        });
    };

    const createClient = (e) => {
        e.preventDefault();

        serverHandshake(true).post("/clients", newClientData)
        .then(res => {
            serverHandshake(true).get("/clients")
            .then(res => {
                Dispatch({ type: 'SET_CLIENT_DATA', payload: res.data });
                setNewClientData(emptyForm);
            })
        })
        .catch(err => {
            console.log("there was an error", err);
        })

        closeModal(e);
    };

    return(
        <Modal isOpen={props.AddClientModal} 
            className="m-client-modal" 
            overlayClassName="client-overaly"
            shouldCloseOnOverlayClick={true}
            onRequestClose={closeModal}
            >
            <form onSubmit={createClient}>
                <h3>Add new Client</h3>
                <div className="profile-row">
                    <p htmlFor="picture">Profile picture (url):</p>
                    <input id="picture" name="picture" placeholder="https://i.imgur.com/1zfsBE6.png" type="url"></input>
                </div>
                <div className="create-client-row">
                    <div className="label-div">
                        <p htmlFor="first_name">First Name</p><p className="asterix">*</p>
                    </div>
                    <input id="first_name" name="first_name" placeholder="" required type="text" value={newClientData.first_name} onChange={handleChange}></input>
                    <div className="label-div">
                        <p htmlFor="last_name">Last Name</p><p className="asterix">*</p>
                    </div>
                    <input id="last_name" name="last_name" placeholder="" required type="text" value={newClientData.last_name} onChange={handleChange}></input>
                </div>
                <div className="create-client-row">
                    <div className="vertical">
                        <div className="label-div">
                            <p htmlFor="email">Email</p><p className="asterix">*</p>
                        </div>
                        <input id="email" name="email" placeholder="" required type="email" value={newClientData.email} onChange={handleChange}></input>
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
                    <button className="save-button" type="submit">Save</button>
                </div>
            </form>
        </Modal>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
    new_program: state.new_program,
});

export default connect(
    mapStateToProps,
)(CreateClient_M);