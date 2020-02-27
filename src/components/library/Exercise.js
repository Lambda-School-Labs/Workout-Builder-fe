import React from "react";

export default function Exercise(props) {
  const {id} = props;
  return (
    <div>
      <p>{`This is a temp exercise details view page and the id is: ${id} `}</p>
    </div>
  );

}