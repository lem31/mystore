/**
 * Renders a list of product suggestions with clickable items.
 *
 * @component
 * @param {Object[]} suggestions - Array of product suggestion objects.
 * @param {Object} suggestions[].id - Unique identifier for the product.
 * @param {Object} suggestions[].image - Image object for the product.
 * @param {string} suggestions[].image.url - URL of the product image.
 * @param {string} suggestions[].title - Title of the product.
 * @param {number|string} suggestions[].price - Price of the product.
 * @param {Function} handleSelect - Callback function triggered when a suggestion is selected.
 * @returns {JSX.Element} The rendered suggestion list component.
 */

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
