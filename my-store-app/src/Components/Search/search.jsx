import SearchIcon from "../../Images/Search-Icon.png";
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SearchInput from "./search_input";
import SuggestionList from "./suggestion_list";




const products = JSON.parse(localStorage.getItem("products")) || [];



function Search(){
  const [searchPhrase, setSearchPhrase] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
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

    
  };
  const handleSelect = (e, product)=> {
    e.preventDefault();

    navigate(`/product/${product.id}`);
    setShowSuggestions(false);
    setSearchPhrase('');
  };

  const handleSubmit = (e) => { e.preventDefault(); };

  return(
    <div>
      <form role="search" onSubmit={{handleSubmit}}>
       
        <img src={SearchIcon} alt="Search Icon"/>
       <SearchInput searchPhrase={searchPhrase} handleChange={handleChange}/>
       <button type="submit" aria-label="Submit search">Search</button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <SuggestionList suggestions={suggestions} handleSelect={handleSelect}/>
      )}
    </div>
  )
};

export default Search;


