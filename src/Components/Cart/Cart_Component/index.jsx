/**
 * Cart component displays the user's shopping cart page.
 *
 * Renders the cart title, a list of cart product cards, and the cart total box.
 *
 * @component
 * @returns {JSX.Element} The rendered cart page.
 */

import CartProductCard from "../Cart_Product_Card";
import CartTotalBox from "../Cart_Total_Box";
import styles from "../../../CSS_Modules/Cart_Page/cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart_page}>
      <div className={styles.h1_div_cart}>
        <h1 className={styles.h1_cart}>MY CART</h1>
      </div>
      <div className={styles.cart_container}>
        <CartProductCard />
        <CartTotalBox />
      </div>
    </div>
  );
};

export default Cart;
