import React from 'react';
import {useParams} from 'react-router-dom';

const products = JSON.parse(localStorage.getItem("products")) || [];

function Product(){
  const {id} = useParams();
  const product = products.find((p) => p.id === id);

  console.log('ID from URL:', id);
   console.log('Product found:', product);
  return(
    <div>
      {product?(
        <>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name}/>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
        </>
      ):(
        <>
        <h1>Product not found</h1>
        </>
      )}
    </div>
  );}

  export default Product;