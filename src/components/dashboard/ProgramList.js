import React from 'react';
import ProgramItem from './ProgramItem';

const ProgramList = React.memo(({ programs, query, handleAssignment }) => {
  const filter = new RegExp(query, 'i');
  const items = [];

  programs.forEach(p => {
    if (!filter.test(p.name)) return;
    items.push(
      <ProgramItem key={p.id} name={p.name} days={p.length} handleAssignment={handleAssignment} />
    );
  });

  return (
    <ul className="flex-grow py-2 overflow-y-scroll border-t border-b border-silver">
      {items}
    </ul>
  );
});

export default ProgramList;
