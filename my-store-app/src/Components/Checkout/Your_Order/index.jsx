import React from 'react';
import useMyStore from '../../Store';
import DisplayProductSubtotal from '../../Cart/Product_Subtotal';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';
import checkoutStyles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';

const YourOrder = () => {
  const cart = useMyStore((state) => state.cart);
  return (
    <>
      <div className={checkoutStyles.outer_cart_box}>
        <div className={checkoutStyles.your_cart_card}>
          <div className={checkoutStyles.your_order_titles}>
            <p className={checkoutStyles.your_product_title}>Product</p>
            <p className={checkoutStyles.your_subtotal_title}>Subtotal</p>
          </div>
          {cart.length > 0 ? (
            <ul>
              {cart.map((product) => (
                product && (
                  <li key={product.id} className={checkoutStyles.your_product_items}>
                    <div className={checkoutStyles.your_products_in_cart_div}>
                      <div className={checkoutStyles.your_image_div}>
                        <img className={checkoutStyles.your_image} src={product.image.url} alt={product.title} />
                      </div>
                      <div>
     
                      <p className={styles.product_title}>{product.title}</p>
                      </div>
                   
                   
            
                      <DisplayProductSubtotal product={product} />
                   
                    </div>
                  </li>
                )
              ))}
            </ul>
          ) : (
            <p className={styles.empty_cart_message}>Your cart is empty.</p>
          )}


        </div>
      </div>

     
     
                    
    </>
  );
};

export default YourOrder;


