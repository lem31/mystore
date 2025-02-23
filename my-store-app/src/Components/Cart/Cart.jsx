import React from 'react';
import useMyStore from '../Store/zustand_store';
import {useEffect} from 'react';
import CartProductCard from './cart_product_card';


const Cart = () => {
  const cart=useMyStore((state)=> state.cart);
  const setProducts = useMyStore((state) => state.setProducts);
  const removeProductFromCart = useMyStore((state)=> state.removeProductFromCart);


  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products && Array.isArray(products)) {
      setProducts(products);
    }
  }, [setProducts]);
  return (
    <div>
     <CartProductCard />
    </div>
  );
};

export default Cart;



