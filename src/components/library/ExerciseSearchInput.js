/* eslint-disable no-multiple-empty-lines */
import React from "react";
import magGlass from '../../img/MagnifyGlass.png';

export default function ExerciseSearchInput(props) {
  const {searchTerm,handleChange,handleBtn} = props;
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


      <button
        className="bf-search-btn-dtop"
        onClick={handleBtn} >
        Create Exercise
      </button>

    </div>

  );
}