import React, { useState } from "react";
import { connect } from 'react-redux';

const ProgramPreviewElement = (props) => {

    const [fullView, setFullView] = useState(false);

    const getExerciseName = (input_id) => {
        // find the name of the selected exercise (by id) from the exercise library
        return props.coach_exercises.filter((exercise) => {return exercise.id === input_id})[0].name;
    }

    const toggleFullView = () => {
        if(fullView) {
            setFullView(false);
        } else {
            setFullView(true);
        }
    }

    return(
        <div className="preview-workout">
            <div className="preview-title">
                <h3>Day {props.day.day}</h3>
            </div>
            <div className="preview-data">
                <div className="data-top">
                    <p className="data-name">{props.day.name}</p>
                    {fullView ? 
                    <img className="display-arrow" src="https://i.imgur.com/UzbSKVB.png" onClick={() => toggleFullView()} alt="shrink"></img>
                    : 
                    <img className="display-arrow" src="https://i.imgur.com/9Mmiusz.png" onClick={() => toggleFullView()} alt="grow"></img>
                    }
                </div>
                {fullView ? 
                <>
                <p className="data-instructions">{props.day.description}</p>
                {props.day.exercises.map(exercise => {
                    return (
                        <div className="data-card">
                            <div className="card-left">
                                <p>{String.fromCharCode(exercise.order+64).toUpperCase()}.</p>
                            </div>
                            <div className="card-right">
                                <p className="card-title">{getExerciseName(exercise.exercise_id)}</p>
                                <p className="card-description">{exercise.exercise_details}</p>
                            </div>
                        </div>
                    )
                })}
                </>
                : <div></div> }
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
    new_program: state.new_program,
    temp_next_workout_id: state.temp_next_workout_id,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramPreviewElement);