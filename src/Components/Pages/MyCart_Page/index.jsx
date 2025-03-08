import Cart from '../../Cart/Cart_Component/index';
import React from 'react';
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';



function MyCart(){
  return(
    <>
    <div className={styles.container}>
<Cart/>
</div>
</>
  )
};

export default MyCart;