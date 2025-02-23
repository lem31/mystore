import React from 'react';
import useMyStore from '../Store/zustand_store';

import AddMoreProductsToCartButton from './add_more_products_to_cart_button';
import RemoveProductsFromCartButton from './remove_products_from _cart_button';
import RemoveAllOfProductFromCartButton from './remove_all_of_product_from_cart_button';


const CartProductCard = () => {
 
  const cart = useMyStore((state) => state.cart);
  return (
    <>
      {cart.length > 0 ? (
        <ul>
          {cart.map((product) => (
            product && (
              <li key={product.id}>
<RemoveAllOfProductFromCartButton product={product} />
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


