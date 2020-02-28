/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import serverHandshake from '../../utils/serverHandshake';
import { Link }   from '@reach/router';
import { connect, useSelector } from "react-redux";
import {fetchExercise} from '../actions/index';

function Exercise(props){
  const coachExercise = useSelector(state => state.coach_exercises.find(c=> c.id === Number(props.id)));

  console.log(coachExercise);
  return(

    <div className= "flex flex-col px-8 py-4 ">
      <div className= "">
        <h1 className ="text-3xl pb-4 font-semibold">{coachExercise.name} </h1>
        <div className ="pb-6">
          <img src= {coachExercise.thumbnail_url } className =" h-25 w-full"/>
        </div>
        <div>
          <h1 className ="text-lg text-silver">  Focal Points:</h1>
          <div className= "">
            <p className= "text-xl">{coachExercise.focal_points}</p>
          </div>
        </div>
        <h2 className ="text-lg text-silver text-sm pt-5">  Link to video:</h2>
        <p className ="text-xl">{coachExercise.video_url}</p>
        <iframe className ="pt-5 w-full" width="480" height="200" src={coachExercise.video_url}>
        </iframe>


        <div className ="mt-16">
          <Link to ="/library">
            <button className="mr-6 border-solid border-2 border-blaze-orange bg-white text-blaze-orange font-semibold text-xl text-center rounded-lg py-3 px-12">
              Back
            </button>
          </Link>

          <Link to = {`/library/${coachExercise.id}/edit`}>
            <button className=" border-solid border-2 border-blaze-orange bg-blaze-orange text-white font-semibold text-xl text-center rounded-lg py-3 px-12 ">
              Edit
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exercise;