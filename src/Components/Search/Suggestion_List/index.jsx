import React from "react";
import styles from "../../../CSS_Modules/Search_Suggestion_Li/Search_Suggestion_Li.module.css";

function SuggestionList({ suggestions, handleSelect }) {
  return (
    <div className={styles.search_suggestion_box}>
      <ul className={styles.search_suggestion_ul}>
        {suggestions.map((product) => (
          <li
            key={product.id}
            className={styles.suggestion}
            onClick={(e) => {
              handleSelect(e, product);
            }}
          >
            <img
              src={product.image.url}
              alt={product.title}
              className={styles.product_image}
            />
            <div className={styles.product_info}>
              <span className={styles.product_title}>{product.title}</span>
              <span className={styles.product_price}>${product.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionList;
