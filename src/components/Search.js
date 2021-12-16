import React from "react";

function Search({ filter, setFilter }) {




  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        value={filter}
        id="search"
        placeholder="Type a name to search..."
        onChange={(e => setFilter(e.target.value))}
      />
    </div>
  );
}

export default Search;
