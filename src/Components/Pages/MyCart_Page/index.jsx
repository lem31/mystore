/**
 * MyCart component renders the shopping cart page.
 * It wraps the Cart component inside a styled container.
 *
 * @component
 * @returns {JSX.Element} The rendered MyCart page component.
 */

import Cart from "../../Cart/Cart_Component/index";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";

function MyCart() {
  return (
    <div className={styles.container}>
      <Cart />
    </div>
  );
}

export default MyCart;
