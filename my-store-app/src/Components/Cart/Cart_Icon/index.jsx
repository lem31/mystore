import React from 'react';
import useMyStore from '../../Store';
import CartImage from '../../../Images/icons8-shopping-bag-50.png';
import {useNavigate} from 'react-router-dom';
import { useCallback} from 'react';
import styles from '../../../CSS_Modules/Header/header.module.css';


const CartIcon = () => {

  const cartCount = useMyStore((state)=> state.cartCount(state));

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate({pathname: '/MyCart'});
  }, [navigate]);

  return(
    <div className={styles.div} onClick={handleClick}>
      <button className={styles.shopping_button}>
      <img className={styles.shopping
   } src={CartImage} alt="Cart Icon" /> </button>
      {cartCount > 0 && (
 
        <span className={styles.span}>
          {cartCount}
        </span>
    
       
      )}
    </div>
  );
};

export default CartIcon;




