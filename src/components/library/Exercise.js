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

    <div className= "flex flex-col px-4 py-5 ">
      <div className= "">
        <h1 className ="text-2xxl">{coachExercise.name} </h1>

        <div >
          <img src= {coachExercise.thumbnail_url } className ="w-5/5 h-58"/>
        </div>

        <h2 className ="text-dove-grey text-sm">  Focal Points</h2>

        <div className= "">

          <p className= "">{coachExercise.focal_points}</p>

        </div>

        <h2 className ="text-dove-grey text-sm">  Link to video</h2>
        <iframe width="420" height="200" src={coachExercise.video_url}>
        </iframe>

        {/* <video width="320" height="240" controls>
          <source src={coachExercise.video_url}/>

          Your browser does not support the video tag.
        </video> */}

        <div className ="flex flex-row w-6/6">
          <Link to ="/library">
            <button className=" bg-blaze-orange text-white font-semibold text-lg text-center rounded py-2 lg:hidden">
              Back
            </button>
          </Link>

          <Link to = {`/library/${coachExercise.id}/edit`}>
            <button className=" bg-blaze-orange text-white font-semibold text-lg text-center rounded py-2 lg:hidden">
              Edit
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exercise;