import React from 'react';
import useMyStore from '../Store/zustand_store'
import CartImage from '../../Images/icons8-shopping-bag-50.png'

const CartIcon = () => {

  const cartCount = useMyStore((state)=> state.cartCount(state));

  return(
    <div>
      <img src={CartImage} alt="Cart Icon"/>
      {cartCount > 0 && (
        <span>
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;