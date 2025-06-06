/**
 * Nav component renders the main navigation bar for the application.
 *
 * @component
 * @returns {JSX.Element} The navigation bar with links to Home, Sale, About, and Contact pages.
 */

import styles from "../../CSS_Modules/Header/header.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.nav_div}>
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li className={styles.li}>
            <Link
              className={styles.link}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link className={styles.link}>Sale</Link>
          </li>
          <li>
            <Link className={styles.link}>About</Link>
          </li>
          <li>
            <Link
              className={styles.link}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
