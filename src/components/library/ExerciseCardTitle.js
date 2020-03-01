import React from "react";

export default function ExerciseCardTitle(props) {

  return (
    <div className="bf-exer-card bf-exer-card-title">
      <div className="bf-exer-link">
        <p className="bf-exer-name bf-exer-name-title">Name</p>
        <p className="bf-exer-card-title-desktop">Thumbnail</p>
        <p className="bf-exer-name bf-exer-name-title">Type</p>
        <p className="bf-exer-card-title-desktop">Video</p>
      </div>
      <div className="bf-exer-card-action">
      </div>
    </div>
  );

}
