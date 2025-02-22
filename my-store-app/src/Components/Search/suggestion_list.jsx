import React from 'react';

function SuggestionList({suggestions, handleSelect}){
  return(
    <ul>
      {suggestions.map((product)=>(
        <li key={product.id} onClick={(e)=> { handleSelect(e, product); }}>{product.title}</li>
      ))}
    </ul>
  )
}

export default SuggestionList;