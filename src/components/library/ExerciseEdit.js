
import React, { useState, useEffect } from "react";
import { Link }   from '@reach/router';
import { connect, useSelector } from "react-redux";
import {updateExercise} from "../actions/index";
import EditModal from "./EditModal";

const ExerciseEdit = (props) => {
  const coachExercise = useSelector(state => state.coach_exercises.find(c=> c.id === Number(props.id)));
  const [success,setSuccess] = useState(false);
  const [route, setRoute] = useState(false);

  const [exerciseData,setExerciseData] = useState({
    name: coachExercise.name,
    thumbnail_url: coachExercise.thumbnail_url,
    focal_points: coachExercise.focal_points,
    video_url: coachExercise.video_url

  });

  const changeHandler = event => {
    setExerciseData({ ...exerciseData, [event.target.name]: event.target.value });
  };

  const successHandler =  () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setRoute(true);

    }, 1500);

  };
  const submitHandler  = event => {

    event.preventDefault();
    successHandler();
    props.updateExercise(props.id, exerciseData);

  };

  useEffect(() => {
    if (route === true){
      props.navigate('/library');
    }
  },[props, route]);

  return (

    <div className= "flex flex-col px-4 py-5 ">

      <form onSubmit = {submitHandler}>

        <input className ="text-5xl pb-4 font-semibold"
          name="name"
          value={exerciseData.name}
          onChange ={changeHandler}
          type= "text"
          required
          margin="normal"
          variant ="outlined"
          placeholder = "Enter name Here"
        >
        </input>
        <div >
          <img src= {coachExercise.thumbnail_url } className ="w-5/5 h-58"/>
        </div>

        {/* <label>Image url:
          <input
            name="thumbnail_url"
            label = "thumbnail_url"

            value={exerciseData.thumbnail_url}
            onChange ={changeHandler}

            margin="normal"
            variant ="outlined"
            placeholder = "Enter thumbnail_url Here"
          >
          </input>
        </label> */}
        <div>
          <label className ="text-xl text-silver">Focal Points: <br/>
            <input
              className= "text-2xl text-black"
              name="focal_points"
              value={exerciseData.focal_points}
              onChange ={changeHandler}
              placeholder = "Enter focal points Here"
            >
            </input>
          </label>
        </div>
        <h2 className ="text-dove-grey text-sm">  Video Link (needs to be an embedded link</h2>
        <input
          name="video_url"
          label = "video_url"
          value={exerciseData.video_url}
          onChange ={changeHandler}
          margin="normal"
          variant ="outlined"
          placeholder = "Enter video_url Here"
        >
        </input>

        <iframe className ="pt-5 w-full" width="480" height="220" src={coachExercise.video_url}>
        </iframe>

        <div className = "flex flex-row w-6/6">
          <button   className=" mr-12 border-solid border-2 border-blaze-orange bg-white text-blaze-orange font-semibold text-2xl text-center rounded-lg py-6 px-24" >Save Changes</button>

          <Link to ="/library">
            <button className=" bg-blaze-orange text-white font-semibold text-lg text-center rounded py-2 lg:hidden">
              Back
            </button>
          </Link>
        </div>
      </form>
      {success ?(
        <EditModal/>
      ): null}
      {/* <button onClick = {() => successHandler()}>modal test</button> */}
      <div>

      </div>
    </div>

  );
};

const mapStateToProps = state => {
  return {
    exercise: state.coach_exercises.exercise
  };
};

export default connect(
  mapStateToProps,
  {updateExercise})(ExerciseEdit);
