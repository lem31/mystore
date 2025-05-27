/**
 * DisplayProducts component renders an individual product card with its image, title, price,
 * discounted price, and a button to view more details. It also displays a discount badge if applicable.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object containing details to display.
 * @param {number} props.product.id - The unique identifier for the product.
 * @param {string} props.product.title - The title of the product.
 * @param {string} props.product.description - The description of the product.
 * @param {Object} props.product.image - The image object for the product.
 * @param {string} props.product.image.url - The URL of the product image.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} props.product.discountedPrice - The discounted price of the product.
 * @returns {JSX.Element} The rendered product card component.
 */

import ViewProductButton from "../View_Product_Btn";
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
