import React from "react";
import styles from "../../../CSS_Modules/Product_Page/product_page.module.css";
const DisplayReviews = ({ product }) => {
  return (
    <>
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
    </>
  );
};

export default DisplayReviews;
