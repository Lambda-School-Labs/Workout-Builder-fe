import React, { useState, useEffect } from "react";
import PrivateRoute from "../../utils/PrivateRoute";

import { Link }   from '@reach/router';
function ExerciseCard(props) {

  return (
    <>


      <Link to ={`/library/${props.exercise.id}`}>
        <div>
        name: {props.exercise.name} focal_points:{props.exercise.focal_points} video_url:{props.exercise.video_url}

        </div>
      </Link>
    </>
  );
}

export default ExerciseCard;