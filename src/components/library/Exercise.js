import React, { useState, useEffect } from "react";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';

function Exercise(props){

  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    serverHandshake(token)
      .get(`/exercises/${props.id}`)
      .then(res => {
    
        setExercise(res.data);
      })
      .catch(err => {
        console.log("There was an error, ", err);
      });
  }, [props.id]);

  return(
    <>
      <div>
        <h1> name: {exercise.name} </h1>
        <h1>  focal_points:{exercise.focal_points}</h1>
        <h1>  video_url:{exercise.video_url}</h1>
      </div>
      <Link to ="/library">
        <button>Back</button>
      </Link>

      <div>
        <button>edit</button>
      </div>
    </>
  );
}

export default Exercise;