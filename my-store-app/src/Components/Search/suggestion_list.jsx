import React from 'react';
import styles from '../../CSS_Modules/Search_Suggestion_Li/Search_Suggestion_Li.module.css';

function SuggestionList({suggestions, handleSelect}){
  return(
    <ul>
      {suggestions.map((product)=>(
        <li key={product.id} className={styles.suggestion} onClick={(e)=> { handleSelect(e, product); }} >
          {product.title}
        </li>
      ))}
    </ul>
  )
}

export default SuggestionList;