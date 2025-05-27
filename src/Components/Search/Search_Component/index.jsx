/**
 * Search component for product lookup with suggestions.
 *
 * Renders a search input and displays product suggestions based on user input.
 * Navigates to the selected product's detail page on selection.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Search component.
 */

import { useState, useCallback } from "react";
import useMyStore from "../../Store";
import { useNavigate } from "react-router-dom";
import SearchInput from "../Search_Input";
import SuggestionList from "../Suggestion_List";
import styles from "../../../CSS_Modules/Search/search.module.css";
import gStyles from "../../../CSS_Modules/Global_Styles/global_styles.module.css";

function Search() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const navigate = useNavigate();
  const products = useMyStore((state) => state.products);
  console.log("Products:", products);

  const handleChange = useCallback(
    (e) => {
      const userInput = e.target.value;
      setSearchPhrase(userInput);

      if (userInput) {
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(userInput.toLowerCase())
        );
        setSuggestions(filteredProducts);
        setShowSuggestions(true);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    },
    [products]
  );
  const handleSelect = useCallback(
    (e, product) => {
      e.preventDefault();

      navigate(`/product/${product.id}`);
      setShowSuggestions(false);
      setSearchPhrase("");
    },
    [navigate]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.search_div_form}>
        <form
          className={styles.search_form}
          role="search"
          onSubmit={handleSubmit}
        >
          <SearchInput
            searchPhrase={searchPhrase}
            handleChange={handleChange}
          />

          <button
            className={gStyles.button}
            onSubmit={handleSubmit}
            type="submit"
            aria-label="Submit search"
          >
            Search
          </button>
        </form>
      </div>
      <div className={styles.outer_suggestion_div}>
        <div className={styles.suggestions_background}>
          <div className={styles.search_suggestion_div}>
            {showSuggestions && suggestions.length > 0 && (
              <SuggestionList
                suggestions={suggestions}
                handleSelect={handleSelect}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
