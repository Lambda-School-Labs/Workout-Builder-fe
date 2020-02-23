import React from 'react';

const ProgramSearch = ({ query, handleQueryChange }) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search"
      value={query}
      onChange={handleQueryChange}
      className="py-2 px-4 placeholder-silver font-medium text-sm"
    />
  );
};

export default ProgramSearch;
