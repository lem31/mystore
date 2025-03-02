import React from 'react';
import {useParams} from 'react-router-dom';
import AddToCartButton from '../../Cart/Add_To_Cart_Btn';
import DisplayDiscount from '../../Product/Display_Discount';
import DisplayReviews from '../../Product/Display_Reviews';
import styles from '../../../CSS_Modules/Product_Page/product_page.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';
import homeStyles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';
const products = JSON.parse(localStorage.getItem("products")) || [];

function Product(){
  const {id} = useParams();
  const product = products.find((p) => p.id === id);
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;

  console.log('ID from URL:', id);
   console.log('Product found:', product);
  return(
    <div >
      {product?(
        <>
        <div className={styles.outer_product_div}>
        <div className={styles.product_div}>
       
        <DisplayDiscount product={product}/>
        <div className={styles.product_img_div}>
        <img className={styles.product_img} src={product.image.url} alt={product.name}/>
        </div>
        <div className={styles.product_text_div}>
        <h1 className={gStyles.h1}>{product.title}</h1>
        <p className={styles.product_text}>{product.description}</p>
        <p className={styles.product_text}>${discountedPrice.toFixed(2)}</p>

       <AddToCartButton product={product}/>
        <DisplayReviews product={product}/>
        </div>
        </div>
        </div>
        </>
      ):(
        <>
        <h1>Product not found</h1>
        </>
      )}
<div className={styles.h2_div_product}>
<h2 className={gStyles.h2}>Related Products</h2>
</div>

<div className={styles.related_products_div}>

  {products
    .filter((p) =>
      p.tags.some((tag) => product.tags.includes(tag)) && p.id !== product.id
    )
    .slice(0, 4)
    .map((relatedProduct) => (
      <div className={styles.related_products_inner_div}  key={relatedProduct.id} >
        <div>

        <div className={homeStyles.product_image_div}>
        <img className={homeStyles.products_cards_image} src={relatedProduct.image.url} alt={relatedProduct.name} />
        </div>
        <h3 className={homeStyles.product_title}>{relatedProduct.title}</h3>
         <div className={homeStyles.price_div}>
           {relatedProduct.price !== relatedProduct.discountedPrice && (
             <p className={homeStyles.product_price} style={{ textDecoration: 'line-through' }}>${relatedProduct.price.toFixed(2)}</p>
           )}
           <p className={homeStyles.discounted_price}>${discountedPrice.toFixed(2)}</p>
         </div>
        </div>
      </div>

    ))}
</div>
    </div>
  );}

  export default Product;



  