import React from 'react';
import useMyStore from '../../Store';

import styles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';

const AddToCartButton = ({product})=>{
  const addProductToCart = useMyStore((state)=> state.addProductToCart);

  const handleClick =()=>{
    console.log('Adding product to cart:', product);
    addProductToCart(product);
    console.log('Product added to cart:', product)
  };

  return (
    <button className={styles.button} onClick={handleClick}>
    Add To Cart</button>
  );


};

export default AddToCartButton;