import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from "../../CSS_Modules/Layout/layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
