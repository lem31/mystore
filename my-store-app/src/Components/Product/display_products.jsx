import ViewProductButton from "./view_product_button";
import React from 'react';
import useMyStore from '../Store/zustand_store'

const DisplayProducts = ({ product }) => {
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;
return(
  <div>
  <h2>{product.title}</h2>
  <img src={product.image.url} alt={product.title} />
  <p>{product.description}</p>
  <p>${discountedPrice.toFixed(2)}</p>
  {discount > 0 && (
    <p> Discount: {discount.toFixed(2)}% off</p>
  )}
  <ViewProductButton id={product.id} />
</div>
);};



export default DisplayProducts;