/**
 * Router component that defines the main application routes using React Router.
 *
 * @component
 * @returns {JSX.Element} The routing structure for the application, including nested routes for layout and pages.
 */

import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home_Page";
import Sale from "../Pages/Sale_Page";
import Product from "../Pages/Product_Page";
import MyCart from "../Pages/MyCart_Page";
import CheckoutPage from "../Pages/Checkout_Page";
import CheckoutSuccess from "../Pages/CheckoutSuccess_Page";
import Contact from "../Pages/Contact_Page";
import styles from "../../CSS_Modules/Global_Styles/global_styles.module.css";

function Router() {
  return (
    <div>
      <Routes className={styles.rooter}>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />

          <Route
            path="/Contact"
            element={<Contact />}
          />
          <Route
            path="/Product/:id"
            element={<Product />}
          />
          <Route
            path="/MyCart"
            element={<MyCart />}
          />
          <Route
            path="/Checkout"
            element={<CheckoutPage />}
          />
          <Route
            path="/CheckoutSuccess"
            element={<CheckoutSuccess />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
