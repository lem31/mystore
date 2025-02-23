import React from 'react';
import useMyStore from '../Store/zustand_store';

import ProceedToCheckoutButton from '../Checkout/proceed_to_checkout_button';

const CartTotalBox = () => {

  const cartTotal = useMyStore((state) => state.cartTotal(state));

  return (
    <div>

{cartTotal > 0 && (
        <>
        <span>
          {cartTotal}
        </span>

    <ProceedToCheckoutButton />
        </>
      )}
   

 

    </div>
  );
};

export default CartTotalBox;



