import React from 'react';
import useMyStore from '../../Store';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css'


const AddMoreProductsToCartButton = ({product})=>{
  const addProductToCart = useMyStore((state)=> state.addProductToCart);

  const handleClick =()=>{
  
    addProductToCart(product);
 
  };

  return (

 
    <button className={styles.add_button} onClick={handleClick}>
  + </button>
  );


};

export default AddMoreProductsToCartButton;