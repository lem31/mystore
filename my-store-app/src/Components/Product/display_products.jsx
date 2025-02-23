import ViewProductButton from "./view_product_button";
import React from 'react';
import useMyStore from '../Store/zustand_store'
import DisplayDiscount from "./display_discount";


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