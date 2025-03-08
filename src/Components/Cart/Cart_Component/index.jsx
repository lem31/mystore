import React from 'react';
import useMyStore from '../../Store';
import {useEffect} from 'react';
import CartProductCard from '../Cart_Product_Card';
import CartTotalBox from '../Cart_Total_Box';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';





const Cart = () => {

  const setProducts = useMyStore((state) => state.setProducts);


  const url = "https://v2.api.noroff.dev/online-shop";
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const products = await response.json();
        if (products && Array.isArray(products)) {
          setProducts(products);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div className={styles.cart_page}> 
    <div className={styles.h1_div_cart}>
        <h1 className={styles.h1_cart}>MY CART</h1>
        </div>
    <div className={styles.cart_container}>
 


     <CartProductCard />
   

     <CartTotalBox />
   
  


    </div>
    </div>
  );
};

export default Cart;



