/**
 * CartProductCard component displays the list of products currently in the user's cart.
 *
 * It renders product details such as image, title, price, quantity, and subtotal.
 * Users can add, remove, or remove all quantities of a product directly from this card.
 * If the cart is empty, a message is shown instead.
 *
 * @component
 * @returns {JSX.Element} The rendered cart product card component.
 */

import useMyStore from "../../Store";
import AddMoreProductsToCartButton from "../Add_More_Products";
import RemoveProductsFromCartButton from "../Remove_Products";
import RemoveAllOfProductFromCartButton from "../Remove_All_Of_Product";
import DisplayProductSubtotal from "../Product_Subtotal";
import styles from "../../../CSS_Modules/Cart_Page/cart.module.css";

const CartProductCard = () => {
  const cart = useMyStore((state) => state.cart);
  return (
    <>
      <div className={styles.outer_cart_box}>
        <div className={styles.cart_card}>
          <div className={styles.cart_card_titles}>
            <p className={`${styles.product_title_cart} ${styles.cart_title}`}>
              Product
            </p>
            <p className={`${styles.price_title} ${styles.cart_title}`}>
              Price
            </p>
            <p className={`${styles.quantity_title} ${styles.cart_title}`}>
              Quantity
            </p>
            <p className={`${styles.subtotal_title} ${styles.cart_title}`}>
              Subtotal
            </p>
          </div>
          {cart.length > 0 ? (
            <ul>
              {cart.map(
                (product) =>
                  product && (
                    <li
                      key={product.id}
                      className={styles.product_items}
                    >
                      <div className={styles.title_div_small}>
                        <p className={styles.title_small}>Product</p>
                        <p className={styles.title_small}>Price</p>
                        <p className={styles.title_small}>Quantity</p>
                        <p className={styles.title_small}>Subtotal</p>
                      </div>
                      <div className={styles.products_in_cart_div}>
                        <RemoveAllOfProductFromCartButton product={product} />
                        <div className={styles.image_div}>
                          <img
                            className={styles.product_image}
                            src={product.image.url}
                            alt={product.title}
                          />
                        </div>

                        <p className={styles.product_title}>{product.title}</p>

                        <p className={styles.product_price}>${product.price}</p>

                        <div className={styles.add_remove}>
                          <RemoveProductsFromCartButton product={product} />

                          <p className={styles.product_quantity}>
                            {product.quantity}
                          </p>

                          <AddMoreProductsToCartButton product={product} />
                        </div>

                        <DisplayProductSubtotal product={product} />
                      </div>
                    </li>
                  )
              )}
            </ul>
          ) : (
            <p className={styles.cart_empty_msg}>Your cart is empty.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CartProductCard;
