import React from 'react';

const ProgramItem = ({ name, days, handleAssignment }) => {
  const weeks = Math.floor(days / 7);
  let timePeriod = (days < 7)
    ? `${days} days`
    : `${weeks} week${weeks > 1 ? 's' : ''}`;
  return (
    <li className="py-1 lg:cursor-pointer lg:hover:bg-cornflower-blue" onClick={handleAssignment}>
      <div className="px-4">
        <p className="font-medium text-dark-grey">{name}</p>
        <p className="font-medium text-2xs text-silver">{timePeriod}</p>
      </div>
    </li>
  );
};

export default ProgramItem;
