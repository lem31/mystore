import React from 'react';
import useMyStore from '../Store/zustand_store';
import {useEffect} from 'react';
import CartProductCard from './cart_product_card';
import CartTotalBox from './cart_total_box';




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



