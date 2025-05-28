/**
 * Header component for the application.
 *
 * Renders the main header section including the logo, navigation,
 * hamburger menu, cart icon, and search component.
 *
 * @component
 * @returns {JSX.Element} The rendered header component.
 */

import CartIcon from "../Cart/Cart_Icon";
import styles from "../../CSS_Modules/Header/header.module.css";
import Nav from "../Nav";
import HamburgerMenu from "../Hamburger_Menu";
import Search from "../Search/Search_Component/index";

function Header({ toggleSidebar }) {
  return (
    <div className={styles.header_container}>
      <header className={styles.header}>
        <p className={styles.logo}>
          <span className={styles.logo_easy}>Easy</span>{" "}
          <span className={styles.logo_buy}>Buy</span>
        </p>
        <HamburgerMenu />
        <Nav />
        <div className={styles.bag}>
          <CartIcon />
        </div>
      </header>
      <button
        onClick={toggleSidebar}
        style={{ fontSize: "20px", cursor: "pointer" }}
      >
        ❤️ Favorites
      </button>
      <Search />
    </div>
  );
}

export default Header;
