import React from 'react';
import useMyStore from '../Store/zustand_store';

const AddToCartButton = ({product})=>{
  const addProductToCart = useMyStore((state)=> state.addProductToCart);

  const handleClick =()=>{
  
    addProductToCart(product);
 
  };

  return (
    <button onClick={handleClick}>
    Add To Cart</button>
  );


};

export default AddToCartButton;