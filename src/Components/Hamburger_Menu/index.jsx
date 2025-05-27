/**
 * HamburgerMenu component renders a responsive hamburger menu for navigation.
 *
 * Features:
 * - Toggles navigation menu visibility on button click.
 * - Prevents background scrolling when menu is open.
 * - Closes menu when a navigation link is clicked.
 *
 * @component
 * @returns {JSX.Element} The rendered hamburger menu component.
 */

import { useState } from "react";
import { useEffect } from "react";
import menu from "../../Images/hamburger-menu-48.png";
import styles from "../../CSS_Modules/Header/header.module.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className={`${styles.menu_button} ${isOpen ? styles.show_hamburger : ""}`}
      >
        <img
          className={styles.hamburger_img}
          src={menu}
          alt="menu"
        />
      </button>
      <div>
        {isOpen && (
          <div className={styles.hamburger_nav_div}>
            <nav className={styles.hamburger_nav}>
              <ul className={styles.nav_ul}>
                <li className={styles.li}>
                  <div className={styles.link_div}>
                    <Link
                      className={styles.link}
                      onClick={closeMenu}
                      to="/"
                    >
                      Home
                    </Link>
                  </div>
                </li>

                <li>
                  <div className={styles.link_div}>
                    <Link
                      className={styles.link}
                      onClick={closeMenu}
                    >
                      Sale
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.link_div}>
                    <Link
                      className={styles.link}
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.link_div}>
                    <Link
                      className={styles.link}
                      onClick={closeMenu}
                      to="/Contact"
                    >
                      Contact
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
