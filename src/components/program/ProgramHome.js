import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import Modal from 'react-modal';
import ProgramListElement from './ProgramListElement';
import CreateProgram from './modals/CreateProgram'

// remove below styling before applying tailwind
import "./program-temp-style.scss"

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

    // useEffect(() => {
    //     console.log("update!");
    // }, [props.updates]);

    return(
        <div className="outer-program">
            <h2 class="main-title">Programs</h2>
            <button class="add-program-button" onClick={() => ToggleCreateProgramModal(true)}>+ Create Program</button>

            <CreateProgram CreateProgramModal={CreateProgramModal} ToggleCreateProgramModal={ToggleCreateProgramModal} />

            <div class="search-div">
                <img class="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png"></img>
                <input 
                    class="search-bar"
                    placeholder="Search Program"
                    onChange={handleChange}
                    value={searchTerm}
                />
            </div>

            <div class="program-list-div">
                <div class="program-list-header">
                    <h4 className="header-title">Title</h4>
                    <h4 className="header-active">Active</h4>
                </div>
                {searchResults.map(program => {
                    return(
                        <ProgramListElement id={program.id} title={program.name} activeUsers={program.assigned_clients.length} />
                    )
                })}
                <div class="program-element"></div>
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
  )(ProgramHome);