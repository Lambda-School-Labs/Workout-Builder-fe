/* eslint-disable no-multiple-empty-lines */
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";
import ExerciseCard from './ExerciseCard';
import ExerciseCardTitle from './ExerciseCardTitle';
import ExerciseSearchInput from './ExerciseSearchInput';
import "./library-display.css";

export function LibraryDisplay(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { coach_exercises = [] } = props;

  const handleSearch = ev => {
    ev.preventDefault();
    setSearchTerm(ev.target.value);
  };

  const handleBtn = ev => {
    ev.preventDefault();
    navigate("/library/new");
  };

  const searchResults = searchTerm
    ? coach_exercises.filter(
      exr => exr.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : coach_exercises;

  return (
    <div>
      <ExerciseSearchInput
        handleChange={handleSearch}
        searchTerm={searchTerm}
      />

      <div className="lib-disp-title">
        <h2 className="lib-disp-title-ex  lib-disp-title-ct">Exercises</h2>
        <h2 className="lib-disp-title-wa lib-disp-title-ct">Warmups</h2>
      </div>

      <ExerciseCardTitle />

      {searchResults.map(el=>
        <ExerciseCard key={el.id} exerObj={el} />
      )}

      <button
        className="lib-disp-btn"
        onClick={handleBtn} >
        Create Exercise
      </button>
    </div>
  );
} //End of LibraryDisplay function

const mapStateToProps = function(state) {
  // console.log("In LibraryDisplay.js and state:",state);
  return {coach_exercises: state.coach_exercises};
};

// export default LibraryDisplay;
export default connect(mapStateToProps)(LibraryDisplay);