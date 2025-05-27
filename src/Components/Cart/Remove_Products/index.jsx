/**
 * Button component to remove a product from the cart.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object to be removed from the cart.
 * @returns {JSX.Element} The rendered button element.
 */

import useMyStore from "../../Store/index";
import styles from "../../../CSS_Modules/Cart_Page/cart.module.css";

const RemoveProductsFromCartButton = ({ product }) => {
  const removeProductFromCart = useMyStore(
    (state) => state.removeProductFromCart
  );

  return (
    <div>
      <button
        className={styles.minus_button}
        onClick={() => removeProductFromCart(product.id)}
      >
        -
      </button>
    </div>
  );
};

export default RemoveProductsFromCartButton;
