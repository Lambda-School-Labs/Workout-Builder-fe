import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ClientListElement from "./ClientListElement";
import CREATECLIENT_D from "./modals/CreateClient_D";
import CREATECLIENT_M from "./modals/CreateClient_M";
import EDITCLIENT_D from "./modals/EditClient_D";
import EDITCLIENT_M from "./modals/EditClient_M";

// mobile styling
import "./clients-mobile-styles.scss"

// desktop styling
import "./clients-desktop-styles.scss"

const ProgramHome = (props) => {
    const [AddClientModal_D, ToggleAddClientModal_D] = useState(false);
    const [AddClientModal_M, ToggleAddClientModal_M] = useState(false);
    const [EditClientModal_D, ToggleEditClientModal_D] = useState(false);
    const [EditClientModal_M, ToggleEditClientModal_M] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.coach_clients);

    useEffect(() => {
        if(props.coach_clients.length) {
            let results = props.coach_clients.filter(client => (client.first_name + " " + client.last_name).toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, props.updates, props.coach_clients]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <>

        {/* MOBILE VIEW */}

        <div className="m-client-home">
            <div className="m-client-home-top">
                <div className="m-search-div" >
                    <img className="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png" alt="search"></img>
                    <input 
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                </div>
            </div>
            <div className="m-client-list-div">
                <div className="client-list-header">
                    <h4 className="header-pic">Name</h4>
                    <h4 className="header-name"> </h4>
                    <h4 className="header-days"> </h4>
                    <h4 className="header-actions"> </h4>
                </div>
                {searchResults.map(client => {
                        return(
                            <ClientListElement 
                            key={client.id} 
                            client={client} 
                            EditClientModal={EditClientModal_M}
                            ToggleEditClientModal={ToggleEditClientModal_M}
                            {...props}/>
                        )
                    })}
            </div>

            <button className="add-client-button" onClick={() => ToggleAddClientModal_M(true)}>+ Add</button>
            {AddClientModal_M ? 
                <CREATECLIENT_M AddClientModal={AddClientModal_M} ToggleAddClientModal={ToggleAddClientModal_M} {...props}/>
            : <div/>}
            {EditClientModal_M ?
                <EDITCLIENT_M EditClientModal={EditClientModal_M} ToggleEditClientModal={ToggleEditClientModal_M} {...props}/>
            : <div/>
            }
            
        </div>

        {/* DESKTOP VIEW */}

        <div className="d-client-home">
            <div className="d-client-home-top">
                <div className="d-search-div" >
                    <img className="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png" alt="search"></img>
                    <input 
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                </div>
                <button className="add-client-button" onClick={() => ToggleAddClientModal_D(true)}>Add New Client</button>
            </div>
            <div className="d-client-list-div">
                <div className="client-list-header">
                    <h4 className="header-pic"> </h4>
                    <h4 className="header-name">Name</h4>
                    <h4 className="header-days"> </h4>
                    <h4 className="header-actions">Actions</h4>
                </div>
                {searchResults.map(client => {
                        return(
                            <ClientListElement 
                            key={client.id} 
                            client={client} 
                            EditClientModal={EditClientModal_D}
                            ToggleEditClientModal={ToggleEditClientModal_D}
                            {...props}/>
                        )
                    })}
            </div>
            {AddClientModal_D ? 
                <CREATECLIENT_D AddClientModal={AddClientModal_D} ToggleAddClientModal={ToggleAddClientModal_D} {...props}/>
            : <div/>}
            {EditClientModal_D ?
                <EDITCLIENT_D EditClientModal={EditClientModal_D} ToggleEditClientModal={ToggleEditClientModal_D} {...props}/>
            : <div />}
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
  )(ProgramHome);