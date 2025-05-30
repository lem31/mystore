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
import sideBarStyles from "../../CSS_Modules/Favorites/index.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

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
        <IconButton
          className={styles.favorite_button_header}
          onClick={toggleSidebar}
        >
          <FavoriteIcon
            color="error"
            className={styles.fav_img_header}
          />
        </IconButton>
        <div className={styles.bag}>
          <CartIcon />
        </div>
      </header>

      <Search />
    </div>
  );
}

export default Header;
