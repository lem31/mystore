import SearchIcon from "../../Images/Search-Icon.png";
import React, {useState, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import SearchInput from "./search_input";
import SuggestionList from "./suggestion_list";
import styles from '../../CSS_Modules/Search/search.module.css';




const products = JSON.parse(localStorage.getItem("products")) || [];



function Search(){
  const [searchPhrase, setSearchPhrase] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const userInput = e.target.value;
    setSearchPhrase(userInput);

    if (userInput){
      const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(userInput.toLowerCase()));
    setSuggestions(filteredProducts);
    setShowSuggestions(true);
    } else{
      setSuggestions([]);
      setShowSuggestions(false);
    }

    
  }, [products]);
  const handleSelect = useCallback((e, product)=> {
    e.preventDefault();

    navigate(`/product/${product.id}`);
    setShowSuggestions(false);
    setSearchPhrase('');
  }, [navigate]);

  const handleSubmit = (e) => { e.preventDefault() 
   };

  return(
    <>
    <div className={styles.search_div_form}>
      <form className={styles.search_form} role="search" onSubmit={handleSubmit}>
     
       <SearchInput searchPhrase={searchPhrase} handleChange={handleChange}/>
    
       <button onSubmit= {handleSubmit} type="submit" aria-label="Submit search">Search</button>
      
      </form>
    
      </div>
      <div className={styles.outer_suggestion_div}>
      <div className={styles.search_suggestion_div}>
      {showSuggestions && suggestions.length > 0 && (
        <SuggestionList suggestions={suggestions} handleSelect={handleSelect}/>
      )}
    </div>
    </div>

    

     
    </>
  )
};

export default Search;


