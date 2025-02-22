import React from 'react';
import useMyStore from '../Store/zustand_store';

const Cart = () => {
  const cart=useMyStore((state)=> state.cart);
  const removeProductFromCart = useMyStore((state)=> state.removeProductFromCart);
  return (
    <div>
      <h1>MY CART</h1>
      {cart.length > 0 ?(
        <ul>
          {cart.map((product)=>(
            <li key ={product.id}>
              {product.title}
              <button onClick={() => removeProductFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ):(
        <p> Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;