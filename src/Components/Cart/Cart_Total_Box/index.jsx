import React from 'react';
import useMyStore from '../../Store';
import ProceedToCheckoutButton from '../../Checkout/Proceed_To_Checkout';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';

const CartTotalBox = () => {

  
  const cartTotal = Number(useMyStore(state => state.cartTotal)) || 0;
 


  return (  <>
  {cartTotal > 0 && (
    <div className={styles.cart_total_position}>
      <div className={styles.cart_total_outer}>
        <h3 className={styles.cart_total_h3}>Cart Total</h3>
        <div className={styles.cart_total_inner}>
          <p className={styles.cart_total_p}>Total</p>
          <span className={styles.cart_total_span}>${cartTotal.toFixed(2)}</span>
         
        </div>
        <div className={styles.proceed_button_div} >
        <ProceedToCheckoutButton />
        </div>
      </div>
    </div>
  )}
</>
);
};

export default CartTotalBox;



