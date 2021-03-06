import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import ExerciseInput from './inputs/ExerciseInput';
import ExerciseDetails from './inputs/ExerciseDetails';
import PhaseInput from "./inputs/PhaseInput";
import LengthInput from "./inputs/LengthInput";
import ProgramNameInput from "./inputs/ProgramNameInput";
import WorkoutNameInput from "./inputs/WorkoutNameInput";
import PublishConfirm from "./modals/PublishConfirm";
import InstructionsInput from "./inputs/InstructionsInput";

// mobile styling - desktop can be done in tailwind
import "./program-mobile-styles.scss";

// desktop styling
import "./program-desktop-styles.scss";

const ProgramCreation = (props) => {
  const Dispatch = useDispatch();
  const [confirmModal, toggleConfirmModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const goBackProgramHome = e => {
    e.preventDefault();
    props.navigate("/program");
  };

  // leave the page if name is empty - to avoid errors in case user refreshes and data resets
  const { new_program, navigate } = props;
  useEffect(() => {
    if(new_program.name === "") {
      navigate("/program");
    }
  }, [navigate, new_program.name]);

  // Current day number
  const [currentDay, setCurrentDay] = useState(1);

  const addWorkout = () => {
    // Add a workout to the data
    let updatedProgram = {...props.new_program};
    updatedProgram.workouts.push({ id: props.temp_next_workout_id, name: "", description: "",  day: currentDay,
      exercises: []
    });
    // cycle the current day
    setCurrentDay(currentDay + 1);
    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    // cycle the next workout id - temp dispatch until backend integration
    Dispatch({ type: "CYCLE_WORKOUT_ID" });
  };

  const deleteWorkout = (input_id) => {
    // filter out the workout from the program by id
    let updatedProgram = {...props.new_program};
    updatedProgram.workouts = updatedProgram.workouts.filter((workout) => workout.id !== input_id);
    // reapply day numbers - in case you delete a day in the middle of the program
    if (updatedProgram.workouts.length > 0) {
      let daynumber = 1;
      updatedProgram.workouts.forEach(workout => {
        workout.day = daynumber;
        daynumber += 1;
        setCurrentDay(daynumber);
      });
    } else {
      // all workout days have been deleted so reset the day to 1
      setCurrentDay(1);
    }
    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    Dispatch({ type: "UPDATE" });
  };

  const addExercise = (workout_id) => {
    // hard copy props.newprogram
    // CAN NOT use a spread here because for some ungodly reason the .push() command three lines down was still modifying the original.
    let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
    let index = updatedProgram.workouts.findIndex(workout => workout.id === workout_id);
    updatedProgram.workouts[index].exercises.push({ exercise_id: 0, order: 0, exercise_details: ""});
    // reapply order numbers
    let ordernumber = 1;
    updatedProgram.workouts[index].exercises.forEach(exercise => {
      exercise.order = ordernumber;
      ordernumber += 1;
    });
    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
  };

  const deleteExercise = (workout_id, order) => {
    // hard copy props.newprogram
    // another issue where the spread operator doesn't create a separate duplicate
    let updatedProgram = JSON.parse(JSON.stringify(props.new_program));
    let index = updatedProgram.workouts.findIndex(workout => workout.id === workout_id);
    updatedProgram.workouts[index].exercises = updatedProgram.workouts[index].exercises.filter((exercise) => (exercise.order !== order));

    // reapply order numbers
    let ordernumber = 1;
    updatedProgram.workouts[index].exercises.forEach(exercise => {
      exercise.order = ordernumber;
      ordernumber += 1;
    });

    // update the program data in redux
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: updatedProgram });
    Dispatch({ type: "UPDATE" });
  };

  const showPreview = () => {
    props.navigate("/program/preview");
  };

  const discardProgram = () => {
    // discard changes and navigate to program home
    const defaultProgram = {id: 0, name: "", description: "", coach_id: 1, length: 0, phase: "",
      workouts: [ ],
      assigned_clients: []
    };
    Dispatch({ type: "UPDATE_NEW_PROGRAM_DATA", payload: defaultProgram });
    props.navigate("/program");
  };

  const checkErrors = () => {
    let errorMsg = false;
    if (!props.new_program.workouts.length > 0) {
      errorMsg = "Please add at least one day to your program"
    } else {
      props.new_program.workouts.forEach(workout => {
        if(workout.exercises.length <= 0) {
          errorMsg = "Please add at least one exercise per each day of your program."
        }
        workout.exercises.forEach(exercise => {
          if(exercise.exercise_id === 0) {
            errorMsg = "Please fill out every Exercise Title with an exercise from your library."
          } else if (exercise.exercise_details.length <= 0) {
            errorMsg = "Please fill out the Sets, reps, tempo, rest, etc. category for each exercise."
          }
          else if (workout.name.length <= 0 || workout.description.length <= 0) {
            errorMsg = "Please add a Title and Coach Instructions for every day in your program."
          }
        })
      })
    }
    return errorMsg;
  }

  const publishConfirm = () => {
    if (!checkErrors()) {
      toggleConfirmModal(true);
    } else {
      setErrorMessage(checkErrors())
    }
  }

  return(
    <>

      {/* MOBILE VIEW */}

      <div className="program-creation">
        <div className="back-div">
          <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={goBackProgramHome} alt="back"></img>
          <p className="back-text" onClick={goBackProgramHome}>Back</p>
        </div>
        <div className="error-message-div">{errorMessage}</div>
        <div className="program-info">
          <div className="title-line">
            <div className="title-left">
              <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => discardProgram()} alt="delete"></img>
              <ProgramNameInput />
            </div>
            <p className="title-preview" onClick={() => showPreview()}>Preview</p>
          </div>
          <div className="info-input-div">
            <h3>Phase: </h3><PhaseInput />
          </div>
          <div className="info-input-div">
            <h3>Days programmed: </h3><LengthInput />
          </div>
        </div>
        {props.new_program.workouts.map((day, idx) => {
          return (
            <div className="day-div" key={`workouts-m-${day}-${idx}`}>
              <div className="day-title-div">
                <h2 className="day-label">Day {day.day}:</h2>
                <WorkoutNameInput day={day} />
                <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => deleteWorkout(day.id)} alt="delete"></img>
              </div>
              <div className="coach-instructions">
                <h3 className="instructions-title">Coach Instructions</h3>
                <InstructionsInput day={day} />
              </div>
              {day.exercises.map((exercise, idx) => {
                return(
                  <div className="exercise-div" key={`workouts-m-${day}-${exercise}-${idx}`}>
                    <h3 className="exercise-label">Exercise Title</h3>
                    <div className="exercise-title-div">
                      <p className="icon-letter">{String.fromCharCode(exercise.order+64).toUpperCase()}</p>
                      <div className="exercise-title-right">
                        <ExerciseInput day={day} exercise={exercise} />
                        <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => deleteExercise(day.id, exercise.order)} alt="delete"></img>
                      </div>
                    </div>
                    <h3 className="exercise-label">Sets, reps, tempo, rest, etc.</h3>
                    <ExerciseDetails day={day} exercise={exercise} />
                  </div>
                );
              })}
              <button className="add-exercise-button" onClick={() => addExercise(day.id)}>+ Add exercise</button>
              <hr />
            </div>
          );
        })}
        <button className="add-day-button" onClick={() => addWorkout()}>+ Add day</button>
        <button className="publish-button" onClick={() => publishConfirm()}>Publish Program</button>
      </div>

      {/* DESKTOP VIEW */}

      <div className="d-program-creation">
        <div className="back-div">
          <img className="back-arrow" src="https://i.imgur.com/xiLK0TW.png" onClick={goBackProgramHome} alt="back"></img>
          <p className="back-text" onClick={goBackProgramHome}>Back</p>
        </div>
        <div className="error-message-div">{errorMessage}</div>
        <div className="d-creation-info">
          <div className="info-left">
            <div className="creation-title">
              <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => discardProgram()} alt="delete"></img>
              <ProgramNameInput />
            </div>
            <div className="creation-phase-days">
              <h3>Phase: </h3><PhaseInput />
              <h3>Number of days in program: </h3><LengthInput />
            </div>
          </div>
          <div className="info-right">
            <button className="publish-button" onClick={() => publishConfirm()}>Publish Program</button>
            <button className="preview-button" onClick={() => showPreview()}>Preview</button>
          </div>
        </div>
        {props.new_program.workouts.map((day, idx) => {
          return (
            <div className="day-div" key={`workouts-d-${day}-${idx}`}>
              <div className="day-title-div">
                <h2 className="day-label">Day {day.day}:</h2>
                <WorkoutNameInput day={day} />
                <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => deleteWorkout(day.id)} alt="delete"></img>
              </div>
              <div className="coach-instructions">
                <h3 className="instructions-title">Coach Instructions</h3>
                <InstructionsInput day={day} />
              </div>

              {day.exercises.map((exercise, idx) => {
                return(
                  <div className="d-exercise-div" key={`workouts-d-${day}-${exercise}-${idx}`}>
                    <div className="exercise-left">
                      <h3 className="exercise-label">Exercise title</h3>
                      <div className="exercise-bottom-left">
                        <p className="icon-letter">{String.fromCharCode(exercise.order+64).toUpperCase()}</p>
                        <ExerciseInput day={day} exercise={exercise} />
                      </div>
                    </div>
                    <div className="exercise-right">
                      <h3 className="exercise-label">Sets, reps, tempo, rest, etc.</h3>
                      <div className="exercise-bottom-right">
                        <ExerciseDetails day={day} exercise={exercise} />
                        <img className="delete-button" src="https://i.imgur.com/58I3xb1.png" onClick={() => deleteExercise(day.id, exercise.order)} alt="delete"></img>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button className="add-exercise-button" onClick={() => addExercise(day.id)}>+ Add exercise</button>
              <hr />
            </div>
          );
        })}
        <button className="d-add-day-button" onClick={() => addWorkout()}>+ Add day</button>
      </div>
      {confirmModal ? <PublishConfirm thisProgram={props.new_program}
        confirmModal={confirmModal} toggleConfirmModal={toggleConfirmModal} {...props}/>
        : <div />}
    </>
  );
};

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
)(ProgramCreation);