import { all } from "axios";
import React, { useState } from "react";

function Search({ list, setList }) {
  const [allPlants, setAllPlants ] = useState(list); 

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          const query = e.target.value.toLowerCase();
          const results = query
          ? allPlants.filter(el => el.name.toLowerCase().includes(query))
          : allPlants;
          setList(results)
        }}
      />
    </div>
  );
}

export default Search;
