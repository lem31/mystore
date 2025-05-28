/**
 * Layout component that provides the main page structure.
 * Renders a header, an outlet for nested routes, and a footer.
 *
 * @component
 * @returns {JSX.Element} The layout structure with header, outlet, and footer.
 */

import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "../../CSS_Modules/Layout/layout.module.css";
import FavoritesSidebar from "../Favorites/";
import useMyStore from "../Store";
import { useEffect } from "react";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const { products, favorites } = useMyStore();
  const { loadFavorites } = useMyStore();

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div className={styles.layout}>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <FavoritesSidebar
          products={products}
          favorites={favorites}
          closeSidebar={toggleSidebar}
        />
      )}

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
