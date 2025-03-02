import React from 'react';
import useMyStore from '../../Store';

import AddMoreProductsToCartButton from '../Add_More_Products';
import RemoveProductsFromCartButton from '../Remove_Products';
import RemoveAllOfProductFromCartButton from '../Remove_All_Of_Product';
import DisplayProductSubtotal from '../Product_Subtotal';



const CartProductCard = () => {
 
  const cart = useMyStore((state) => state.cart);
  return (
    <>

    <div >
      <p>product</p>
      <p>price</p>
      <p>quantity</p>
      <p>subtotal</p>
    </div>
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
                <DisplayProductSubtotal product={product} />
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


