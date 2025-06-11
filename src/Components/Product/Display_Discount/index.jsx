/**
 * Displays the discount percentage for a given product if a discount is available.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object containing price and discountedPrice.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} props.product.discountedPrice - The discounted price of the product.
 * @returns {JSX.Element} The discount percentage element, or nothing if no discount.
 */

import { useLocation } from "react-router-dom";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";
import productStyles from "../../../CSS_Modules/Product_Page/product_page.module.css";

const DisplayDiscount = ({ product }) => {
  const { price, discountedPrice } = product;
  const discount =
    price > discountedPrice ? ((price - discountedPrice) / price) * 100 : 0;

  const location = useLocation();
  const isProductPage = location.pathname.includes("/product");
  return (
    <div
      className={`${styles.discount_div} ${productStyles.discount_div_pPage}`}
    >
      {discount > 0 && (
        <p
          className={`${styles.product_discount} ${isProductPage ? productStyles.product_discount_mobile : ""}`}
        >
          {" "}
          - {Math.floor(discount)}%{" "}
        </p>
      )}
    </div>
  );
};

export default DisplayDiscount;
