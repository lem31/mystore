import React from 'react';
import useMyStore from '../Store/zustand_store';
import {useEffect} from 'react';


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
      <h1>MY CART</h1>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            product &&(
            <li key={product.id}>
              <img src={product.image.url} alt={product.title}/>
              
              <p>
              {product.title}</p>
              <p>
              {product.price}</p>
              <button onClick={() => removeProductFromCart(product.id)}>Remove</button>
            </li>
)))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;



