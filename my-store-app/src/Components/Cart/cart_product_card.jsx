import React from 'react';
import useMyStore from '../Store/zustand_store';
import BinIcon from '../../Images/icons8-bin-50.png';
import AddMoreProductsToCartButton from './add_more_products_to_cart_button';
import RemoveProductsFromCartButton from './remove_products_from _cart_button';


const CartProductCard = () => {
  const removeProductFromCart = useMyStore((state) => state.removeProductFromCart);
  const cart = useMyStore((state) => state.cart);
  return (
    <>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            product && (
              <li key={product.id}>
                <button onClick={() => removeProductFromCart(product.id)}><img src={BinIcon} alt="Remove" /></button>
                <img src={product.image.url} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <div>
                  <RemoveProductsFromCartButton product={product} />
                <p>{product.quantity}</p>
                <AddMoreProductsToCartButton product={product} />
                </div>
              </li>
            )
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
};

export default CartProductCard;


