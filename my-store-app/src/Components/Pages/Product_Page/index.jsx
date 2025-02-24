import React from 'react';
import {useParams} from 'react-router-dom';
import AddToCartButton from '../../Cart/Add_To_Cart_Btn';
import DisplayDiscount from '../../Product/Display_Discount';
import DisplayReviews from '../../Product/Display_Reviews';

const products = JSON.parse(localStorage.getItem("products")) || [];

function Product(){
  const {id} = useParams();
  const product = products.find((p) => p.id === id);
  const {price, discountedPrice} = product;
  const discount = price > discountedPrice ? ((price - discountedPrice)/price) * 100 : 0;

  console.log('ID from URL:', id);
   console.log('Product found:', product);
  return(
    <div>
      {product?(
        <>
        <h1>{product.name}</h1>
        <DisplayDiscount product={product}/>
        <img src={product.image.url} alt={product.name}/>
        <p>{product.description}</p>
        <p>${discountedPrice.toFixed(2)}</p>

       <AddToCartButton product={product}/>
        <DisplayReviews product={product}/>
       
        </>
      ):(
        <>
        <h1>Product not found</h1>
        </>
      )}
    </div>
  );}

  export default Product;



  