import React from 'react';
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import AddToCartButton from '../../Cart/Add_To_Cart_Btn';
import DisplayDiscount from '../../Product/Display_Discount';
import DisplayReviews from '../../Product/Display_Reviews';
import styles from '../../../CSS_Modules/Product_Page/product_page.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';
import ViewProductButton from "../../../Components/Product/View_Product_Btn";



const url = "https://v2.api.noroff.dev/online-shop";

function Product(){
  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct]= useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
    const [isError, setIsError] = useState(false);

  useEffect(() => {
   const fetchProducts = async () => {
      try {
        const response = await fetch(url)
;
const data = await response.json();
setProducts(data.data);
const foundProduct = data.data.find((p) => p.id === id);
setProduct(foundProduct);
setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchProducts();
  }, [id]);
        
       
  if (isLoading) {
    return <div>Loading Products</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }


  const discountedPrice = product?.discountedPrice || 0;
  
 
  return(
    <div className={styles.outer_div} >
      {product?(
        <>
        <div className={styles.outer_product_div}>
        <div className={styles.product_div}>
       
        <DisplayDiscount product={product}/>
        <div className={styles.product_img_div}>
        <img className={styles.product_img} src={product.image.url} alt={product.name}/>
        </div>
        <div className={styles.product_text_div}>
        <h1 className={`${gStyles.h1} ${styles.h1_product}`}>{product.title}</h1>
        <p className={styles.product_text}>{product.description}</p>
        <div className={styles.price_div}>
        {product.price !== product.discountedPrice && (
             <p className={styles.related_product_price} style={{ textDecoration: 'line-through' }}>${product.price.toFixed(2)}</p>
           )}
        <p className={styles.product_text}>${discountedPrice.toFixed(2)}</p>
       
        </div>

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
  
<div className = {styles.product_title_layout}>
<div className={styles.outer_related_products_div} >

 


<h2 className={styles.h2_product}>Related Products</h2>
  
<div className={styles.related_products_div}>



  {products
    .filter((p) =>
      p.tags.some((tag) => product.tags.includes(tag)) && p.id !== product.id
    )
    .slice(0, 4)
    .map((relatedProduct) => (
     
      <div className={styles.related_products_inner_div}  key={relatedProduct.id} >


      <div className={styles.related_product_img_div }>
        <img className={styles.related_product_img} src={relatedProduct.image.url} alt={relatedProduct.name} />
        </div>
        <div className={styles.related_product_text}> 
        <h3 className={styles.product_title}>{relatedProduct.title}</h3>
         <div className={styles.price_div}>
           {relatedProduct.price !== relatedProduct.discountedPrice && (
             <p className={styles.related_product_price} style={{ textDecoration: 'line-through' }}>${relatedProduct.price.toFixed(2)}</p>
           )}
           <p className={styles.discounted_price}>${discountedPrice.toFixed(2)}</p>
         
         
         </div>
         <div className={styles.view_related_product_button}>
         <ViewProductButton id={relatedProduct.id} />
         </div>
         </div>
       
      </div>

    ))}
    </div>
    </div>
    </div>
    </div>
  );}

  export default Product;



  