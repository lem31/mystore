/**
 * CartIcon component displays a shopping cart icon with the current cart item count.
 * Navigates to the cart page when clicked.
 *
 * @component
 * @returns {JSX.Element} The rendered cart icon component.
 */

import useMyStore from "../../Store";
import CartImage from "../../../Images/icons8-shopping-bag-50.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "../../../CSS_Modules/Header/header.module.css";

const CartIcon = () => {
  const cartCount = useMyStore((state) => state.cartCount(state));

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate({ pathname: "/MyCart" });
  }, [navigate]);

  return (
    <div className={styles.div}>
      <button
        className={styles.shopping_button}
        onClick={handleClick}
      >
        <img
          className={styles.shopping}
          src={CartImage}
          alt="Cart Icon"
        />{" "}
        {cartCount > 0 && <span className={styles.span}>{cartCount}</span>}
      </button>
    </div>
  );
};

export default CartIcon;
