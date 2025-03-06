import React from 'react';
import checkoutSuccessStyles from '../../../CSS_Modules/Checkout_Success/checkout_success.module.css'
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';

function CheckoutSuccess(){
  const orderNumber = Math.floor(Math.random() * 1000000);

 

  return(
<div className={checkoutSuccessStyles.container_checkout_success}>
   <div className={checkoutSuccessStyles.div}>
    <h1 className={gStyles.h1}>
      Thank you for your purchase!
    </h1>
    <p className={checkoutSuccessStyles.p}>Your Order Number Is: {orderNumber}</p>
    <p className={checkoutSuccessStyles.p}>We'll Email You An Order Confirmation With Details and Tracking Information</p>
    <button className={gStyles.button}>CONTINUE SHOPPING</button>
    </div>
    </div>

  )
}

export default CheckoutSuccess;