import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ProgramListElement from './ProgramListElement';
import CreateProgram from './modals/CreateProgram'

// mobile styling
import "./program-mobile-styles.scss"

// desktop styling
import "./program-desktop-styles.scss"

const ProgramHome = (props) => {
    const [CreateProgramModal, ToggleCreateProgramModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.coach_programs);

    useEffect(() => {
        let results = props.coach_programs.filter(program => program.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, props.updates]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <>

        {/* MOBILE VIEW */}

        <div className="outer-program">

            <div className="search-div" >
                <img className="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png" alt="search"></img>
                <input 
                    className="search-bar"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>

            <div className="program-list-div">
                <div className="program-list-header">
                    <h4 className="header-title">Title</h4>
                    <h4 className="header-active">Active</h4>
                </div>
                {searchResults.map(program => {
                    return(
                        <ProgramListElement program={program} id={program.id} title={program.name} activeUsers={program.assigned_clients.length} {...props}/>
                    )
                })}
            </div>

            <button className="add-program-button" onClick={() => ToggleCreateProgramModal(true)}>Create Program</button>

            <CreateProgram CreateProgramModal={CreateProgramModal} ToggleCreateProgramModal={ToggleCreateProgramModal} {...props}/>
        </div>

        {/* DESKTOP VIEW */}

        <div className="d-outer-program">
            <div className="d-outer-top">
                <div className="d-search-div" >
                    <img className="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png" alt="search"></img>
                    <input 
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                </div>
                <button className="add-program-button" onClick={() => ToggleCreateProgramModal(true)}>Create Program</button>
            </div>
            <div className="d-program-list-div">
                <div className="program-list-header">
                    <h4 className="header-title">Name</h4>
                    <h4 className="header-active">Active</h4>
                    <h4 className="header-assign"></h4>
                    <h4 className="header-actions">Actions</h4>
                </div>
                {searchResults.map(program => {
                        return(
                            <ProgramListElement program={program} id={program.id} title={program.name} activeUsers={program.assigned_clients.length} {...props}/>
                        )
                    })}
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
  )(ProgramHome);