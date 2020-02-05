import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
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
        activeUsers: 1
    },
    {
        id: 3,
        title: "Mary's Program",
        activeUsers: 1
    },
    {
        id: 4,
        title: "Olympic Lifting",
        activeUsers: 1
    }
]

const ProgramHome = (props) => {

    return(
        <div class="outer-program">
            <h2 class="main-title">Programs</h2>
            <button class="add-program-button">+ Create Program</button>
            <div class="search-div">
                <img class="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png"></img>
                <input class="search-bar"></input>
            </div>

            <div class="program-list-div">
                <div class="program-list-header">
                    <div class="header-section">Title</div>
                    <div class="header-section">Active</div>
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