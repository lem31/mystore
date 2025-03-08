
import { useEffect, useState } from "react";
import DisplayProducts from "../Components/Product/Display_Products/index";
import React from 'react';
import styles from '../CSS_Modules/Home_Page_Body/home_page_body.module.css';



const url = "https://v2.api.noroff.dev/online-shop";

function FetchProducts() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
      
        localStorage.setItem("products", JSON.stringify(json.data));
        setProducts(Array.isArray(json.data) ? json.data : []);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div><p className={styles.loading_msg}>Loading Products...</p></div>;
  }
  if (isError) {
    return <div><p className={styles.error_msg}>Error loading data</p></div>;
  }
  return (
    <div className={styles.product_cards_container}>
      {products.map((product) => (
        <DisplayProducts key={product.id} product={product} />
      ))}
    </div>
  );
}


export default FetchProducts;