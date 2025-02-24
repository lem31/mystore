import React from 'react';
import useMyStore from '../../Store';
import {useEffect} from 'react';
import CartProductCard from '../Cart_Product_Card';
import CartTotalBox from '../Cart_Total_Box';




const Cart = () => {

  const setProducts = useMyStore((state) => state.setProducts);



  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products && Array.isArray(products)) {
      setProducts(products);
    }
  }, [setProducts]);
  const products = JSON.parse(localStorage.getItem('products')) || [];

  return (
    <div>

     <CartProductCard />

     <CartTotalBox />
   

 

    </div>
  );
};

export default Cart;



