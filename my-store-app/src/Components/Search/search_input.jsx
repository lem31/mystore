import React from 'react';
import SearchIcon from "../../Images/Search-Icon.png";

function SearchInput({searchPhrase, handleChange}){
return (
  <div className="search-input">
    <label htmlFor="search-input">Search</label>
    <img src={SearchIcon} alt="Search Icon"/>
    <input type="search" placeholder="What are you looking for?" aria-label="Search" value={searchPhrase} onChange={handleChange}/>

  </div>
)
}

export default SearchInput;