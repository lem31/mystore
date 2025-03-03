import React from 'react';
import useMyStore from '../../Store';

import ProceedToCheckoutButton from '../../Checkout/Proceed_To_Checkout/index';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';

const CartTotalBox = () => {

  const cartTotal = useMyStore((state) => state.cartTotal());



  return (
    <div className={styles.cart_total_outer}>
      {cartTotal > 0 && (
        <>
        <h3 className={styles.cart_total_h3}>Cart Total</h3>
        <div className={styles.cart_total_inner}>
          
        <p className={styles.cart_total_p} >Total</p> 
          <span className={styles.cart_total_span} >${cartTotal}</span>
          </div>
       
        
         
        </>
      )}
<div className={styles.proceed_button_div}>
<ProceedToCheckoutButton />
</div>
    </div>
  );
};

export default CartTotalBox;



