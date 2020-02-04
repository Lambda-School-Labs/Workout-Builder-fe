import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';


// remove below styling before applying tailwind
import './dashboard-temp-style.scss'

const Dashboard = (props) => {

    return(
        <div class="outer-dash">
            <button class="add-client-button">+ Add Client</button>
            <h2 class="due-title">Due Soon</h2>
            <div class="athlete-team-selector">
                <h3>Athlete</h3>
                <h3>Teams</h3>
            </div>
            <div class="client-display">

                {/* Client cards should be moved to another component and added here via .map */}
                <div class="client-card">
                    <div class="card-name">
                        <h4>Joe Smith</h4>
                        <img src="https://i.imgur.com/HcthUxw.jpg"></img>
                    </div>
                    <div class="card-data">
                        <div class="data-start">
                            <div class="data-left">
                                <h5>Start:</h5>
                            </div>
                            <div class="data-right">
                                <p>01/1/2020</p>
                                <p>4 weeks</p>
                            </div>
                        </div>
                        <div class="data-phase">
                            <div class="data-left">
                                <h5>Phase:</h5>
                            </div>
                            <div class="data-right">
                                <p>Strength</p>
                                <p>5 days left</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <img src="https://i.imgur.com/WApVGDV.png"></img>
                        <button>Repeat Program</button>
                        <img src="https://i.imgur.com/x6ccI8q.png"></img>
                        <button>Add Program</button>
                    </div>
                </div>

                
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
  )(Dashboard);