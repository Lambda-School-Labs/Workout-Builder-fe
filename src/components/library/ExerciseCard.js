import React, { useState } from "react";
import { navigate } from '@reach/router';
import ExerciseViewModal from './ExerciseViewModal';
import vDots from '../../img/vDots.png';
import hDots from '../../img/hDots.png';
import vPlay from '../../img/VideoPlayback.png';

export default function ExerciseCard(props) {
  const {id,name,type,video_url,thumbnail_url} = props.exerObj;
  const [ExModalOn, ToggleExModal] = useState(false);

  function handleCardClick(e) {
    navigate(`/library/${id}`);
  }

  const stopPropagation = e => e.stopPropagation();

  return (
    <div className="bf-exer-card">
      <div className="bf-exer-link cursor-pointer" onClick={handleCardClick}>
        <p className="bf-exer-name">{name}</p>
        { thumbnail_url && <img className="bf-exer-card-thumbnail" src={thumbnail_url} alt="thumbnail_url" /> }
        { !thumbnail_url && <p className="bf-exer-card-thumbnail"></p> }
        <p className="bf-exer-name">{type}</p>
        { video_url &&
          <a href={video_url} target="_blank" rel="noopener noreferrer" className="bf-exer-card-video-link" onClick={stopPropagation}>
            <img className="bf-exer-card-video" src={vPlay} alt="video_url" />
          </a>

          // <iframe width="130" height="64" src="https://www.youtube.com/embed/1oed-UmAxFs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        }
        { !video_url && <p className="bf-exer-card-video"></p> }

      </div>

      <div className="bf-exer-card-action">
        <img
          className="bf-vertical-dots"
          src={vDots}
          onClick={() => ToggleExModal(true)}
          alt="vertical dots">
        </img>
        <img
          className="bf-horizontal-dots"
          src={hDots}
          onClick={() => ToggleExModal(true)}
          alt="horizontal dots">
        </img>
        {ExModalOn &&
          <ExerciseViewModal ToggleExModal={ToggleExModal} exerObj={props.exerObj} />
        }
      </div>
    </div>
  );

}