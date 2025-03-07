import React from 'react';
import useMyStore from '../../Store';
import DisplayProductSubtotal from '../../Cart/Product_Subtotal';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';
import checkoutStyles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';

const YourOrder = () => {
  const cart = useMyStore((state) => state.cart);
  const cartTotal = Number(useMyStore(state => state.cartTotal)) || 0;
  return (
    <>
      <div className={checkoutStyles.outer_cart_box}>
        <div className={checkoutStyles.your_cart_card}>
        <div className={checkoutStyles.your_order_title_div}>
              <h2 className={gStyles.h2}>Your Order</h2>
            </div>
       <div className={checkoutStyles.titles_and_products_div}>
          <div className={checkoutStyles.your_order_border_bottom}>
            
          
          <div className={checkoutStyles.your_order_titles}>
           
            <p className={checkoutStyles.your_product_title}>Product</p>
            <p className={checkoutStyles.your_subtotal_title}>Subtotal</p>
          </div>
          </div>
          {cart.length > 0 ? (
            <ul className={checkoutStyles.your_product_ul}>
              {cart.map((product) => (
                product && (
                  
                  <li key={product.id} className={checkoutStyles.your_product_items}>
  <div className={checkoutStyles.your_order_titles_mobile}>
            
            <p className={checkoutStyles.your_product_title_mobile}>Product</p>
            <p className={checkoutStyles.your_subtotal_title_mobile}>Subtotal</p>
          </div>

                    <div className={checkoutStyles.your_products_in_cart_div}>
                      <div className={checkoutStyles.your_image_div}>
                        <img className={checkoutStyles.your_image} src={product.image.url} alt={product.title} />
                      </div>
                      <div>
     
                      <p className={checkoutStyles.product_title}>{product.title}</p>
                      </div>
                   
                   <div className={checkoutStyles.your_subtotal_div}>
                   <DisplayProductSubtotal product={product} />
                   </div>
            
             
                   
                    </div>
                   
                 
                  </li>
        
                  
                )
              ))}
            </ul>
           
          ) : (
            <p className={styles.empty_cart_message}>Your cart is empty.</p>
          )}
          </div>
  {cartTotal > 0 && (
   
  
       
        <div className={styles.cart_total_inner}>
          <p className={styles.cart_total_p}>Total</p>
          <span className={styles.cart_total_span}>${cartTotal.toFixed(2)}</span>
        </div>
       
    
   
  )}

        </div>
      </div>

     
     
                    
    </>
  );
};

export default YourOrder;


