import React from 'react';
import SearchIcon from "../../../Images/Search-Icon.png";
import styles from '../../../CSS_Modules/Search/search.module.css';

function SearchInput({searchPhrase, handleChange}){
return (
  <div className={styles.search_div} >
      <div className={styles.search_icon_div}>
    <img className={styles.search_icon} src={SearchIcon} alt="Search Icon"/>
    </div>
    <label className={styles.search_label} htmlFor="search-input">Search</label>
  
    <input className={styles.search_input} type="search" placeholder="What are you looking for?" aria-label="Search" value={searchPhrase} onChange={handleChange}/>

  </div>
)
}

export default SearchInput;

