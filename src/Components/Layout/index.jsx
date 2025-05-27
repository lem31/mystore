/**
 * Layout component that provides the main page structure.
 * Renders a header, an outlet for nested routes, and a footer.
 *
 * @component
 * @returns {JSX.Element} The layout structure with header, outlet, and footer.
 */

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
