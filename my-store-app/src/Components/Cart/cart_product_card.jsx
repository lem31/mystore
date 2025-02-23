import React from 'react';
import useMyStore from '../Store/zustand_store';
import BinIcon from '../../Images/icons8-bin-50.png';


const CartProductCard =({product})=>{
  const removeProductFromCart = useMyStore((state) => state.removeProductFromCart);
  return(
    <li key={product.id}>
         <button onClick={() => removeProductFromCart(product.id)}><BinIcon/></button>  
      <img src={product.image.url} alt={product.title}/>
      <p>{product.title}</p>
      <p>{product.price}</p>
   
    </li>
  );
};

export default CartProductCard;