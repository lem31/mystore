import React from 'react';
import useMyStore from '../Store/zustand_store';



const CartTotalBox = () => {

  const cartTotal = useMyStore((state) => state.cartTotal(state));

  return (
    <div>

{cartTotal > 0 && (
        <>
        <span>
          {cartTotal}
        </span>
    
        </>
      )}
   

 

    </div>
  );
};

export default CartTotalBox;



