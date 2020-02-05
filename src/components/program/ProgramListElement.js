import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

const ProgramListElement = (props) => {
    return(
        <div class="program-element">
            <div class="checkbox-div">
                <img src="https://i.imgur.com/hNmAXfP.png"></img>
            </div>
            <div class="title-div">
                <p>{props.title}</p>
            </div>
            <div class="active-div">
                <p>{props.activeUsers}</p>
            </div>
            <div class="send-div">
                <img src="https://i.imgur.com/N17ItX7.png"></img>
            </div>
            <div class="options-div">
                <img src="https://i.imgur.com/qXWAARK.png"></img>
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
  )(ProgramListElement);