/**
 * Displays a list of reviews for a given product.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object containing reviews.
 * @param {Array} props.product.reviews - Array of review objects.
 * @param {string} props.product.reviews[].description - The review text.
 * @param {number} props.product.reviews[].rating - The rating value (number of stars).
 * @param {string} props.product.reviews[].username - The username of the reviewer.
 * @returns {JSX.Element} Rendered list of product reviews.
 */

import styles from "../../../CSS_Modules/Product_Page/product_page.module.css";
const DisplayReviews = ({ product }) => {
  return (
    <div>
      {product.reviews.map((review, index) => (
        <div key={index}>
          <p className={styles.product_text}>{review.description}</p>
          <p>
            {Array.from({ length: review.rating }, (_, i) => (
              <span
                className={styles.stars}
                key={i}
              >
                ★
              </span>
            ))}
          </p>

          <p className={styles.product_text}>{review.username}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayReviews;
