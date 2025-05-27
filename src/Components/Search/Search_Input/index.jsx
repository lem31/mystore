/**
 * SearchInput component renders a styled search input field with an icon and label.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} props.searchPhrase - The current value of the search input.
 * @param {function} props.handleChange - Callback function to handle input changes.
 * @returns {JSX.Element} The rendered search input component.
 */

import React from "react";
import SearchIcon from "../../../Images/Search-Icon.png";
import styles from "../../../CSS_Modules/Search/search.module.css";

function SearchInput({ searchPhrase, handleChange }) {
  return (
    <div className={styles.search_div}>
      <div className={styles.search_icon_div}>
        <img
          className={styles.search_icon}
          src={SearchIcon}
          alt="Search Icon"
        />
      </div>
      <label
        className={styles.search_label}
        htmlFor="search-input"
      >
        Search
      </label>

      <input
        className={styles.search_input}
        type="search"
        id="search-input"
        placeholder="Search"
        aria-label="Search"
        value={searchPhrase}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchInput;
