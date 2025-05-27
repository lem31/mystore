import CartIcon from "../Cart/Cart_Icon";
import styles from "../../CSS_Modules/Header/header.module.css";
import Nav from "../Nav";
import React from "react";
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
