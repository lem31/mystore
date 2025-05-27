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

function Header() {
  return (
    <div>
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

      <Search />
    </div>
  );
}

export default Header;
