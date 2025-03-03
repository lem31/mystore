import React from 'react';
import useMyStore from '../../Store';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css'


const RemoveProductsFromCartButton = ({product}) => {
  const removeProductFromCart = useMyStore((state) => state.removeProductFromCart);

  return (
    <>
    
     <button className={styles.minus_button} onClick={() => removeProductFromCart(product.id)}>-</button>
    
    </>
  );
};

export default RemoveProductsFromCartButton;


