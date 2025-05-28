/**
 * FetchProducts fetches product data from an API,
 * manages loading and error states, stores the products in local storage and a global store,
 * and renders a list of products using the DisplayProducts component.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying products, a loading message, or an error message.
 */

import { useEffect, useState } from "react";
import useMyStore from "../Components/Store";
import DisplayProducts from "../Components/Product/Display_Products/index";
import styles from "../CSS_Modules/Home_Page_Body/home_page_body.module.css";

const url = "https://v2.api.noroff.dev/online-shop";

function FetchProducts() {
  const setStoreProducts = useMyStore((state) => state.setProducts);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const toggleFavorite = useMyStore((state) => state.toggleFavorite);
  const favorites = useMyStore((state) => state.favorites);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        const fetchedProducts = Array.isArray(json.data) ? json.data : [];
        localStorage.setItem("products", JSON.stringify(fetchedProducts));
        setProducts(fetchedProducts);
        setStoreProducts(fetchedProducts);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, [setStoreProducts]);

  if (isLoading) {
    return (
      <div>
        <p className={styles.loading_msg}>Loading Products...</p>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <p className={styles.error_msg}>Error loading data</p>
      </div>
    );
  }
  return (
    <div>
      <div className={styles.product_cards_container}>
        {products.map((product) => (
          <DisplayProducts
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FetchProducts;
