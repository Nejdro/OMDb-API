import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="search-bar">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search for film..."
      ></input>
    </div>
  );
};
export default Search;
