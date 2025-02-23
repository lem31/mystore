import React from 'react';
import useMyStore from '../Store/zustand_store'
import CartImage from '../../Images/icons8-shopping-bag-50.png'
import {useNavigate} from 'react-router-dom';
import { useCallback} from 'react';
import Cart from './cart';

const CartIcon = () => {

  const cartCount = useMyStore((state)=> state.cartCount(state));

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate({pathname: '/MyCart'});
  }, [navigate]);

  return(
    <div>
      <img src={CartImage} alt="Cart Icon" onClick={handleClick}/>
      {cartCount > 0 && (
        <>
        <span>
          {cartCount}
        </span>
    
        </>
      )}
    </div>
  );
};

export default CartIcon;




