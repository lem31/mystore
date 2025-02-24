import ViewProductButton from "../View_Product_Btn";
import React from 'react';
import useMyStore from '../../Store'
import DisplayDiscount from "../Display_Discount";


const DisplayProducts = ({ product }) => {
  const { discountedPrice} = product;

return(
  <div>
  <h2>{product.title}</h2>
  <DisplayDiscount product={product}/>
  <img src={product.image.url} alt={product.title} />
  <p>{product.description}</p>
  <p>${discountedPrice.toFixed(2)}</p>
 
  <ViewProductButton id={product.id} />

  
</div>
);};



export default DisplayProducts;