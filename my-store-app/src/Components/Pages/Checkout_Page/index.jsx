import React from 'react';
import PaymentForm from "../../../Components/Checkout/Payment_Form";
import styles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';
import YourOrder from '../../../Components/Checkout/Your_Order/index';
function CheckoutPage() {
  return (
    <div className={styles.container_checkout}>
      <h1 className={gStyles.h1}>CHECKOUT</h1>
       <div className={styles.inner_container_checkout}>
      
      <PaymentForm/>
     
      <YourOrder/>
      </div>
    </div>
  );
};

export default CheckoutPage;