/* eslint-disable no-multiple-empty-lines */
import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { navigate } from "@reach/router";


import ExerciseCard from './ExerciseCard';
import ExerciseCardTitle from './ExerciseCardTitle';
import ExerciseSearchInput from './ExerciseSearchInput';

// import "./library-display.css";
import "./css/library-display.css";

function LibraryDisplay(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const exeObjAry = props.coach_exercises;


  useEffect(() => {
    const results = exeObjAry.filter(exr =>
      exr.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm,exeObjAry]);


  const handleSearch = ev => {
    ev.preventDefault();
    setSearchTerm(ev.target.value);
  };

  const handleBtn = ev => {
    ev.preventDefault();
    navigate("/library/new");
  };



  return (
    <div className="bf-whole-lib-disp">

      <ExerciseSearchInput
        handleChange={handleSearch}
        searchTerm={searchTerm}
        handleBtn={handleBtn}
      />

      <div className="bf-lib-disp-title">
        <h2 className="bf-lib-disp-title-ex">Exercises</h2>
        <h2 className="bf-lib-disp-title-wa">Warmups</h2>
      </div>

      <ExerciseCardTitle />


      {searchResults.map(el=>
        <ExerciseCard key={el.id} exerObj={el} />
      )}

      <div className="bf-lib-disp-buffer-above-btn-mobile"></div>



      <div className="bf-lib-disp-div-for-btn-mobile">
        <button
          className="bf-lib-disp-btn-mobile"
          onClick={handleBtn} >
        Create Exercise
        </button>
      </div>




    </div>



  );





} //End of LibraryDisplay function



const mapStateToProps = function(state) {
  console.log("In LibraryDisplay.js and state:",state);
  return {coach_exercises: state.coach_exercises};
};


// export default LibraryDisplay;
export default connect(mapStateToProps)(LibraryDisplay);