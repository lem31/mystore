/**
 * Footer component displays the website's footer section.
 * Includes copyright information and social media icons.
 *
 * @component
 * @returns {JSX.Element} The rendered footer component.
 */

import styles from "../../CSS_Modules/Footer/footer.module.css";
import facebook from "../../Images/icons8-facebook-50.png";
import instagram from "../../Images/icons8-instagram-50.png";
import twitter from "../../Images/icons8-twitter-50.png";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.footer_cr}>
          Copyright © 2025 EasyBuy | Powered by EasyBuy
        </p>
        <div className={styles.footer_img_div}>
          <img
            className={styles.footer_img}
            src={facebook}
            alt="Facebook"
          ></img>
          <img
            className={styles.footer_img}
            src={instagram}
            alt="Instagram"
          ></img>
          <img
            className={styles.footer_img}
            src={twitter}
            alt="Twitter"
          ></img>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
