
import React from 'react';
import useMyStore from '../../Store'
import { useLocation } from 'react-router-dom'
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';
import productStyles from '../../../CSS_Modules/Product_Page/product_page.module.css'

const DisplayDiscount = ({ product }) => {
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;

  const location= useLocation();
  const isProductPage= location.pathname.includes('/product');
return(
  <div className={styles.discount_div}>
  
  {discount > 0 && (
    <p className={`${styles.product_discount} ${isProductPage ? productStyles.product_discount_mobile: ''}`}> - {Math.floor(discount)}% </p>
  )}

</div>
);};

export default DisplayDiscount;