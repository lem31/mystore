import React from 'react';
import PaymentForm from "../../../Components/Checkout/Payment_Form";
import styles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';
function CheckoutPage() {
  return (
    <div className={styles.container_checkout}>
      <h1 className={gStyles.h1}>CHECKOUT</h1>
<PaymentForm/>
    </div>
  );
};

export default CheckoutPage;