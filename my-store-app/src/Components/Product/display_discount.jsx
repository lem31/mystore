
import React from 'react';
import useMyStore from '../Store/zustand_store'

const DisplayDiscount = ({ product }) => {
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;
return(
  <div>
  
  {discount > 0 && (
    <p> Discount: {discount.toFixed(2)}% off</p>
  )}

</div>
);};

export default DisplayDiscount;