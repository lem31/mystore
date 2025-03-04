import React from 'react';
import useMyStore from '../../Store';
import DisplayProductSubtotal from '../../Cart/Product_Subtotal';
import styles from '../../../CSS_Modules/Cart_Page/cart.module.css';

const YourOrder = () => {
  const cart = useMyStore((state) => state.cart);
  return (
    <>
      <div className={styles.outer_cart_box}>
        <div className={styles.cart_card}>
          <div className={styles.cart_card_titles}>
            <p className={styles.product_card_title}>Product</p>
            <p className={styles.subtotal_title}>Subtotal</p>
          </div>
          {cart.length > 0 ? (
            <ul>
              {cart.map((product) => (
                product && (
                  <li key={product.id} className={styles.product_items}>
                    <div className={styles.products_in_cart_div}>
                      <div className={styles.image_div}>
                        <img className={styles.product_image} src={product.image.url} alt={product.title} />
                      </div>
                      <p className={styles.product_title}>{product.title}</p>
                      <p className={styles.product_price}>${product.price}</p>
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


