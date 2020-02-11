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

// temporary list of coach's programs - this should be pulled from the back end
const programList = [
    {
        id: 1,
        title: "Team 1 programming",
        activeUsers: 1
    },
    {
        id: 2,
        title: "Joe's Program",
        activeUsers: 10
    },
    {
        id: 3,
        title: "Mary's Program",
        activeUsers: 7
    },
    {
        id: 4,
        title: "Olympic Lifting",
        activeUsers: 8
    },
    {
        id: 5,
        title: "Test",
        activeUsers: 8
    },
    {
        id: 6,
        title: "Very long phrase that won't fit in small screen",
        activeUsers: 8
    }
]

const ProgramHome = (props) => {
    const [CreateProgramModal, ToggleCreateProgramModal] = useState(false);

    return(
        <div className="outer-program">
            <h2 class="main-title">Programs</h2>
            <button class="add-program-button" onClick={() => ToggleCreateProgramModal(true)}>+ Create Program</button>

            <CreateProgram CreateProgramModal={CreateProgramModal} ToggleCreateProgramModal={ToggleCreateProgramModal} />

            <div class="search-div">
                <img class="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png"></img>
                <input class="search-bar"></input>
            </div>

            <div class="program-list-div">
                <div class="program-list-header">
                    <h4 className="header-title">Title</h4>
                    <h4 className="header-active">Active</h4>
                </div>
                {programList.map(element => {
                    return(
                        <ProgramListElement id={element.id} title={element.title} activeUsers={element.activeUsers} />
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
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramHome);