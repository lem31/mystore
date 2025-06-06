/**
 * ViewProductButton component renders a button that navigates to the product detail page.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string|number} props.id - The unique identifier of the product to view.
 * @returns {JSX.Element} A button that navigates to the product's detail page when clicked.
 */

import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";
import gStyles from "../../../CSS_Modules/Global_Styles/global_styles.module.css";

function ViewProductButton({ id }) {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);
  return (
    <div className={styles.view_product_button_div}>
      <button
        className={gStyles.button}
        onClick={handleClick}
      >
        View Product
      </button>
    </div>
  );
}

export default ViewProductButton;
