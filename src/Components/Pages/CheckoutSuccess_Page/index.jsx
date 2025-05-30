/**
 * CheckoutSuccess component displays a confirmation message after a successful purchase.
 *
 * Shows a randomly generated order number and provides a button to navigate back to the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered CheckoutSuccess page.
 */

import checkoutSuccessStyles from "../../../CSS_Modules/Checkout_Success/checkout_success.module.css";
import gStyles from "../../../CSS_Modules/Global_Styles/global_styles.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function CheckoutSuccess() {
  const orderNumber = Math.floor(Math.random() * 1000000);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate({ pathname: "/" });
  }, [navigate]);

  return (
    <div className={checkoutSuccessStyles.container_checkout_success}>
      <div className={checkoutSuccessStyles.div}>
        <h1 className={gStyles.h1}>Thank you for your purchase!</h1>
        <p className={checkoutSuccessStyles.p}>
          Your Order Number Is: {orderNumber}
        </p>
        <p className={checkoutSuccessStyles.p}>
          We'll Email You An Order Confirmation With Details and Tracking
          Information
        </p>
        <button
          className={gStyles.button}
          onClick={handleClick}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
