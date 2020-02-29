
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

    <div className= "flex flex-col px-6 py-4 ">

      <form onSubmit = {submitHandler}>

        <input className ="text-3xl pb-2 font-semibold"
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
        <div className ="pb-4" >
          <img src= {coachExercise.thumbnail_url } className ="w-full h-58"/>
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
          <label className ="text-lg text-silver">Focal Points: <br/>
            <textarea
              rows="4"
              cols= "30"
              className= "border-solid border border-silver rounded-lg text-2xl text-black"
              name="focal_points"
              value={exerciseData.focal_points}
              onChange ={changeHandler}
              placeholder = "Enter focal points Here"
            >
            </textarea>
          </label>
        </div>
        <h2 className ="text-dove-grey text-lg">  Video Link (needs to be an embedded link)</h2>
        <textarea
          className= "border-solid border border-silver rounded-lg text-2xl text-black "
          cols= "30"
          rows ="1"
          name="video_url"
          label = "video_url"
          value={exerciseData.video_url}
          onChange ={changeHandler}
          margin="normal"
          variant ="outlined"
          placeholder = "Enter video_url Here"
        >
        </textarea>

        <iframe className ="pt-5 w-full" width="480" height="200" src={coachExercise.video_url}>
        </iframe>

        <div className = "whitespace-no-wrap mt-16 ">
          <Link to ="/library">
            <button className="mr-6 border-solid border-2 border-blaze-orange bg-white text-blaze-orange font-semibold text-xl text-center rounded-lg py-3 px-12">
              Back
            </button>
          </Link>
          <button   className="border-solid border-2 border-blaze-orange bg-blaze-orange text-white font-semibold text-xl text-center rounded-lg py-3 px-12" >Save</button>
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
