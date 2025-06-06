/**
 * DisplayProductSubtotal component displays the subtotal price for a specific product.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.product - The product object for which the subtotal is calculated.
 * @returns {JSX.Element} The rendered subtotal for the given product.
 */

import { useEffect, useState } from "react";
import useMyStore from "../../Store";
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
