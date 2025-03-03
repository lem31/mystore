import React from 'react';
import useMyStore from '../../Store';
import BinIcon from '../../../Images/icons8-bin-24.png';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';


const RemoveAllOfProductFromCartButton = ({product}) => {
  const removeAllOfProductFromCart = useMyStore((state) => state.removeAllOfProductFromCart);


  return (
    <>
    
     <button className={styles.bin_button} onClick={() => removeAllOfProductFromCart(product.id)}> < img className={styles.bin_btn_img} src={BinIcon} alt="Remove all" /></button>
    
    </>
  );
};

export default RemoveAllOfProductFromCartButton;

