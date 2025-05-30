/**
 * Button component to add more of a specific product to the cart.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object to add to the cart.
 * @returns {JSX.Element} The rendered button to add more products.
 */

import useMyStore from "../../Store";
import styles from "../../../CSS_Modules/Cart_Page/cart.module.css";
const AddMoreProductsToCartButton = ({ product }) => {
  const addProductToCart = useMyStore((state) => state.addProductToCart);
  const handleClick = () => {
    addProductToCart(product);
  };
  return (
    <button
      className={styles.add_button}
      onClick={handleClick}
    >
      +{" "}
    </button>
  );
};
export default AddMoreProductsToCartButton;
