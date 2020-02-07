import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import Modal from 'react-modal';
import ProgramListElement from './ProgramListElement';

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
    }
]

const ProgramHome = (props) => {

    const [ProgramModal, showProgramModal] = useState(false);

    return(
        <div class="outer-program">
            <h2 class="main-title">Programs</h2>
            <button class="add-program-button" onClick={() => showProgramModal(true)}>+ Create Program</button>

            <Modal isOpen={ProgramModal} contentp="Create Program" className="program-modal" overlayClassName="program-overaly">
                
                <h3>Create Program</h3>
                <form>
                    <p htmlFor="program-name">Program Name *</p>
                    <input id="program-name" placeholder="Ex: Olympic Lifting"></input>
                    <p htmlFor="program-phase">Phase *</p>
                    <input id="program-phase" placeholder="Ex: Strength"></input>
                    <p htmlFor="program-days">Number of days in program *</p>
                    <input id="program-days" placeholder="Ex: 21"></input>
                </form>
                <div className="program-button-div">
                    <button onClick={() => showProgramModal(false)} className="cancel-button">Cancel</button>
                    <button onClick={() => showProgramModal(false)} className="create-button">+ Create program</button>
                </div>
                <p className="legend-p">*Required</p>
            </Modal>

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
                <div class="program-list-footer"></div>
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