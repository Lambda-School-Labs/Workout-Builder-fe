import React from "react";

import "./library-display.css";

export default function ExerciseCardTitle(props) {

  return (
    <div className="exer-card">
      <p>Name</p>
      <p className="exer-card-hide-mobile" ></p>
      <p>Type</p>
      <p className="exer-card-hide-mobile" ></p>
      <div className="exer-card-action">
      </div>
    </div>
  );

}

