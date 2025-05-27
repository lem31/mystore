/**
 * Sale component displays the sale page content.
 *
 * @component
 * @returns {JSX.Element} The rendered sale page.
 */

import React from "react";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";

function Sale() {
  return (
    <div className={styles.container}>
      <h1>SALE</h1>
      <p>SALES</p>
    </div>
  );
}

export default Sale;
