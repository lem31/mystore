import React from 'react';
import useMyStore from '../../Store';
import {useEffect} from 'react';
import CartProductCard from '../Cart_Product_Card';
import CartTotalBox from '../Cart_Total_Box/index';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';
import ErrorBoundary from '../../Error_Boundary/index';




const Cart = () => {

  const setProducts = useMyStore((state) => state.setProducts);



  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products && Array.isArray(products)) {
      setProducts(products);
    }
  }, [setProducts]);
  

  return (
    <div className={styles.cart_page}> 
    <div className={styles.h1_div_cart}>
        <h1 className={styles.h1_cart}>MY CART</h1>
        </div>
    <div className={styles.cart_container}>
 


     <CartProductCard />
   
<ErrorBoundary>
     <CartTotalBox />
   
     </ErrorBoundary>


    </div>
    </div>
  );
};

export default Cart;



