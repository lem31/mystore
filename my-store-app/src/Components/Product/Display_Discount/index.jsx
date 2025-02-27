
import React from 'react';
import useMyStore from '../../Store'
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';

const DisplayDiscount = ({ product }) => {
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;
return(
  <div className={styles.discount_div}>
  
  {discount > 0 && (
    <p className={styles.product_discount}> - {Math.floor(discount)}% </p>
  )}

</div>
);};

export default DisplayDiscount;