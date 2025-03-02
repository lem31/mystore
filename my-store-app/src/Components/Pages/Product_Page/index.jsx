import React from 'react';
import {useParams} from 'react-router-dom';
import AddToCartButton from '../../Cart/Add_To_Cart_Btn';
import DisplayDiscount from '../../Product/Display_Discount';
import DisplayReviews from '../../Product/Display_Reviews';
import styles from '../../../CSS_Modules/Product_Page/product_page.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';

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

<h2>Related Products</h2>
<div className="related-products">
  {products
    .filter((p) =>
      p.tags.some((tag) => product.tags.includes(tag)) && p.id !== product.id
    )
    .slice(0, 4)
    .map((relatedProduct) => (
      <div key={relatedProduct.id} className="related-product">
        <h3>{relatedProduct.name}</h3>
        <img src={relatedProduct.image.url} alt={relatedProduct.name} />
        <p>${relatedProduct.discountedPrice.toFixed(2)}</p>
      </div>
    ))}
</div>
    </div>
  );}

  export default Product;



  