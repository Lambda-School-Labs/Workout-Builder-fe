/* eslint-disable no-multiple-empty-lines */
import React, { useState } from "react";
import magGlass from '../../img/MagnifyGlass.png';

import ExerciseCreationModal from './ExerciseCreationModal';

export default function ExerciseSearchInput(props) {
  // const {searchTerm,handleChange,handleBtn} = props;
  const {searchTerm,handleChange} = props;

  const [creating, setCreating] = useState(false);

  const handleCreating = () => setCreating(true);
  const cancelCreating = () => setCreating(false);

  const confirmCreating = () => {
    setCreating(false);
  };

  return (
    <div className="bf-exer-search-and-btn">

      <div className="bf-exer-search-div">
        <img className="bf-exer-search-img" src={magGlass} alt="Magnifying Glass" />

        <input className="bf-exer-search-box"
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>


      {/* <button
        className="bf-search-btn-dtop"
        onClick={handleBtn} >
        Create Exercise
      </button> */}

      <button
        className="bf-search-btn-dtop"
        onClick={handleCreating} >
        Create Exercise
      </button>

      {creating && (
        <ExerciseCreationModal
          cancel = {cancelCreating}
          confirm = {confirmCreating}
        />
      )}

    </div>

  );
}