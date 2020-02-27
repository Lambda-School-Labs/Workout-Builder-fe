/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';
import { connect, useSelector } from "react-redux";
import {fetchExercise} from '../actions/index';

function Exercise(props){
  const coachExercise = useSelector(state => state.coach_exercises.find(c=> c.id === Number(props.id)));
  // const {exercise} = props;

  // useEffect(() => {
  //   props.fetchExercise(props.id);

  // }, []);
  console.log(coachExercise);
  return(

    <div className= " ">
      <div className= "m-4 ">
        <h1 className ="text-2xxl">{coachExercise.name} </h1>

        <div >
          <img src= {coachExercise.thumbnail_url } className ="w-5/5 h-58"/>
        </div>

        <h2 className ="text-dove-grey text-sm">  Focal Points</h2>

        <div className= "">

          <p className= "">{coachExercise.focal_points}</p>

        </div>

        <h1>  video_url:{coachExercise.video_url}</h1>

        <Link to ="/library">
          <button>Back</button>
        </Link>

        <Link to = {`/library/${coachExercise.id}/edit`}>
          <div>
            <button>edit</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Exercise;