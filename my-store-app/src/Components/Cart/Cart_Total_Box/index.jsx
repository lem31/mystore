import React from 'react';
import useMyStore from '../../Store';

import ProceedToCheckoutButton from '../../Checkout/Proceed_To_Checkout';

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



