/* eslint-disable no-multiple-empty-lines */
import React from "react";
import magGlass from '../../img/MagnifyGlass.png';

import "./library-display.css";


export default function ExerciseSearchInput(props) {
  const {searchTerm,handleChange} = props;
  return (
    <div className="exer-search-div">
      <img className="exer-search-img" src={magGlass} alt="Magnifying Glass" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}