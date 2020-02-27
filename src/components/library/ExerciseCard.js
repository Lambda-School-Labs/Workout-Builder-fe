import React, { useState } from "react";
import { Link } from '@reach/router';
import ExerciseViewModal from './ExerciseViewModal';
import "./library-display.css";
import vDots from '../../img/vDots.png';
import hDots from '../../img/hDots.png';

export default function ExerciseCard(props) {
  const {id,name,type,video_url,thumbnail_url} = props.exerObj;
  const [ExModalOn, ToggleExModal] = useState(false);

  return (
    <div className="exer-card">
      <Link to={`/library/${id}`}>{name}</Link>
      <img className="exer-card-hide-mobile" src={thumbnail_url} alt="thumbnail_url" />
      <p>{type}</p>
      <img className="exer-card-hide-mobile" src={video_url} alt="video_url" />

      {/* <video width="50" preload="metadata">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/mp4" />
      </video> */}

      <div className="exer-card-action">
        <img
          className="vertical-dots"
          src={vDots}
          onClick={() => ToggleExModal(true)}
          alt="vertical dots">
        </img>
        <img
          className="horizontal-dots"
          src={hDots}
          onClick={() => ToggleExModal(true)}
          alt="horizontal dots">
        </img>
        {ExModalOn
          ? <ExerciseViewModal ToggleExModal={ToggleExModal} exerObj={props.exerObj} />
          : <></>}
      </div>
    </div>
  );

}