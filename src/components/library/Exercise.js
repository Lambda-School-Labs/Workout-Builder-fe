import React from "react";
import { Link }   from '@reach/router';
import { useSelector } from "react-redux";

function Exercise(props){
  const coachExercise = useSelector(state => state.coach_exercises.find(c=> c.id === Number(props.id)));

  console.log(coachExercise);
  return(
    <div>
      <div className= " lg:hidden flex flex-col px-6 py-3 ">
        <div className= "">
          <h1 className ="text-3xl pb-2 font-semibold">{coachExercise.name} </h1>
          <div className ="pb-4">
            <img src= {coachExercise.thumbnail_url } className =" h-25 w-full"  alt ="an exercise"/>
          </div>
          <div>
            <h1 className ="text-lg text-silver ">  Focal Points:</h1>
            <div className= "">
              <p className= "text-xl break-words">{coachExercise.focal_points}</p>
            </div>
          </div>
          <h2 className ="text-lg text-silver text-sm pt-5">  Link to video:</h2>
          <p className ="text-xl break-words">{coachExercise.video_url}</p>
          <iframe className ="pt-5 w-full" width="480" height="200" src={coachExercise.video_url}>
          </iframe>

          <div className ="mt-16 whitespace-no-wrap w-4/4">
            <Link to ="/library">
              <button className="relative mr-6 border-solid border-2 border-blaze-orange bg-white text-blaze-orange font-semibold text-xl text-center rounded-lg py-3 px-12 w-4/4">
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
      {/*Desktop View*/}

      <div className= "hidden lg:flex flex-col self-center border-solid pl-64 pt-20">
        <div className =" ml-64 justify-center border-solid ">
          <h1 className ="text-3xl pb-6 font-semibold">{coachExercise.name} </h1>
          <div className ="pb-12">
            <img src= {coachExercise.thumbnail_url } className =" w-1/3" alt ="an exercise"/>
          </div>
          <div>
            <h1 className ="text-lg text-silver  ">  Focal Points:</h1>
            <div className= "w-2/6">
              <p className= "text-lg break-words">{coachExercise.focal_points}</p>
            </div>
          </div>
          <h2 className ="text-lg text-silver text-sm pt-5">  Link to video:</h2>
          <p className ="text-lg break-words w-2/6">{coachExercise.video_url}</p>
          <iframe className ="pt-5 w-3/3"src={coachExercise.video_url}>
          </iframe>

          <div className ="mt-16 ">
            <Link to ="/library">
              <button className=" mr-6 border-solid border-2 border-blaze-orange bg-white text-blaze-orange font-semibold text-xl text-center rounded-lg py-3 px-12">
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
    </div>
  );
}

export default Exercise;