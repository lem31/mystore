import React from 'react';
import useMyStore from '../../Store';
import {useEffect} from 'react';
import CartProductCard from '../Cart_Product_Card';
import CartTotalBox from '../Cart_Total_Box';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';




const Cart = () => {

  const setProducts = useMyStore((state) => state.setProducts);



  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products && Array.isArray(products)) {
      setProducts(products);
    }
  }, [setProducts]);
  

  return (
    <div className={styles.container}>
   <div className={styles.inner_container}>

     <CartProductCard />
     </div>

     <CartTotalBox />
   



    </div>
  );
};

export default Cart;



