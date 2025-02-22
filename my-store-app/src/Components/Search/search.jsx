import SearchIcon from "../../Images/Search-Icon.png";
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';




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
    setSearchPhrase
    ('');
  };

  return(
    <div>
      <form role="search">
        <label htmlFor="search-input">Search</label>
        <img src={SearchIcon} alt="Search Icon"/>
        <input type="search" placeholder="What are you looking for?" aria-label="Search" value={searchPhrase} onChange={handleChange}/>
        <button type="submit" aria-label="Submit search">Search</button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul>
          {suggestions.map((product)=>(
            <li key={product.id} onClick={(e)=> { handleSelect(e, product); setSuggestions([]); }}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default Search;


