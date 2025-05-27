import ViewProductButton from "../View_Product_Btn";
import React from "react";
import DisplayDiscount from "../Display_Discount";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";

const DisplayProducts = ({ product }) => {
  const { discountedPrice } = product;

  return (
    <div className={styles.individual_card_container}>
      <DisplayDiscount product={product} />
      <div className={styles.product_image_div}>
        <img
          className={styles.products_cards_image}
          src={product.image.url}
          alt={product.title}
        />
      </div>
      <div className={styles.product_info_div}>
        <h2 className={styles.product_title}> {product.title}</h2>
        {/* <div>
  <p className={styles.product_description}>{product.description}</p>
  </div> */}
        <div className={styles.price_div}>
          {product.price !== discountedPrice && (
            <p
              className={styles.product_price}
              style={{ textDecoration: "line-through" }}
            >
              ${product.price.toFixed(2)}
            </p>
          )}
          <p className={styles.discounted_price}>
            ${discountedPrice.toFixed(2)}
          </p>
        </div>

        <ViewProductButton id={product.id} />
      </div>
    </div>
  );
};

export default DisplayProducts;
