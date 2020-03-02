import React, { useState } from "react";
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import ClientOptions from "./modals/ClientOptions";

const ClientListElement = (props) => {
    const Dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [ClientOptionsModal_M, ToggleClientOptionsModal_M] = useState(false);
    const [ClientOptionsModal_D, ToggleClientOptionsModal_D] = useState(false);

    const viewClient = () => {
        // Set the program to new program data and view it in the preview page
        Dispatch({ type: "UPDATE_CLIENT_DATA", payload: props.client });
        props.navigate(`/clients/view/${props.client.id}`);
    }

    const toggleCheck = () => {
        setChecked(!checked);
    }

    return(
        <>

        {/* MOBILE VIEW */}

        <div className="m-client-element">
            <div className="pic-div">
                <input type="checkbox" checked={checked} onChange={toggleCheck} />
                <img src="https://i.imgur.com/1zfsBE6.png" alt="client-face" onClick={() => viewClient()}></img>
            </div>
            <div className="name-div">
                <p onClick={() => viewClient()}>{props.client.first_name}</p>
                <p onClick={() => viewClient()}>{props.client.last_name}</p>
            </div>
            <div className="actions-div" id={`actions-div-${props.client.id}`}>
                <img className="vertical-dots" src="https://i.imgur.com/DPz3fj4.png" onClick={() => ToggleClientOptionsModal_M(true)} alt="options-v"></img>
                {ClientOptionsModal_M ? 
                <ClientOptions 
                ClientOptionsModal={ClientOptionsModal_M} 
                ToggleClientOptionsModal={ToggleClientOptionsModal_M} 
                EditClientModal={props.EditClientModal}
                ToggleEditClientModal={props.ToggleEditClientModal}
                ToggleAddClientModal={props.ToggleAddClientModal}
                client={props.client}
                {...props}/>
                : <div />}
            </div>
        </div>

        {/* DESKTOP VIEW */}

        <div className="d-client-element">
            <div className="pic-div">
                <img src="https://i.imgur.com/1zfsBE6.png" alt="client-face" onClick={() => viewClient()}></img>
            </div>
            <div className="name-div">
                <p onClick={() => viewClient()}>{props.client.first_name}</p>
                <p onClick={() => viewClient()}>{props.client.last_name}</p>
            </div>
            <div className="days-div">
                <div className="days-highlight">
                    <p>21 days left</p>
                </div>
            </div>
            <div className="actions-div" id={`actions-div-${props.client.id}`}>
                <img className="horizontal-dots" src="https://i.imgur.com/NOM7XwR.png" onClick={() => ToggleClientOptionsModal_D(true)} alt="options-h"></img>
                {ClientOptionsModal_D ? 
                <ClientOptions 
                ClientOptionsModal={ClientOptionsModal_D} 
                ToggleClientOptionsModal={ToggleClientOptionsModal_D} 
                EditClientModal={props.EditClientModal}
                ToggleEditClientModal={props.ToggleEditClientModal}
                ToggleAddClientModal={props.ToggleAddClientModal}
                client={props.client}
                {...props}/>
                : <div />}
            </div>
        </div>

        </>
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
)(ClientListElement);