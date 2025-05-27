import React, { useEffect, useState } from "react";
import useMyStore from "../../Store";
import { useLocation } from "react-router-dom";
import styles from "../../../CSS_Modules/Cart_Page/cart.module.css";
import checkoutStyles from "../../../CSS_Modules/Checkout_Page/checkout.module.css";

const DisplayProductSubtotal = ({ product }) => {
  const [subtotal, setSubtotal] = useState(0);
  const specificProductTotal = useMyStore(
    (state) => state.specificProductTotal
  );

  useEffect(() => {
    setSubtotal(specificProductTotal(product));
  }, [product, specificProductTotal]);

  return (
    <div>
      <h2
        className={
          location.pathname === "/MyCart"
            ? styles.subtotal
            : checkoutStyles.checkout_subtotal
        }
      >
        {" "}
        ${subtotal}
      </h2>
    </div>
  );
};

export default DisplayProductSubtotal;
