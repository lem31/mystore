import React from "react";
import useMyStore from "../../Store";
import { useEffect } from "react";
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
