import React from 'react';
import useMyStore from '../Store/zustand_store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';


const AddMoreProductsToCartButton = ({product})=>{
  const addProductToCart = useMyStore((state)=> state.addProductToCart);

  const handleClick =()=>{
  
    addProductToCart(product);
 
  };

  return (

 
    <button onClick={handleClick}>
   <FontAwesomeIcon icon={faSquarePlus} /> </button>
  );


};

export default AddMoreProductsToCartButton;