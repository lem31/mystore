/**
 * AddToCartButton component renders a button to add a product to the cart.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object to add to the cart.
 * @returns {JSX.Element} The rendered Add To Cart button.
 */

import useMyStore from "../../Store";

import styles from "../../../CSS_Modules/Global_Styles/global_styles.module.css";

const AddToCartButton = ({ product }) => {
  const addProductToCart = useMyStore((state) => state.addProductToCart);

  const handleClick = () => {
    addProductToCart(product);
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
