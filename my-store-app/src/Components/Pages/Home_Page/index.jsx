import React from 'react';
import FetchProducts from '../../../API/api';
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';
import gStyles from '../../..//CSS_Modules/Global_Styles/global_styles.module.css';

function Home(){
  return (
    <div className={styles.container}>
      <div className={styles.h1_div_home}>
        <div className={styles.h1_home_inner_box}>
          <h1 className={gStyles.h1}>Check Out Our Latest Products Below!<br/><span>OR GO</span> STRAIGHT TO OUR SALE</h1>
          <div className={styles.sale_button_div}>
            <button className={gStyles.button}>SALE</button>
          </div>
        </div>
      </div>

    
     
      <div className={styles.external_container}>
      <div  className={styles.h2_div_home}>
        <h2 className={gStyles.h2}>PURCHASE SOME OF OUR HOTTEST ITEMS BEFORE THEY SELL OUT!</h2>
        
      </div>
      <FetchProducts />
      </div>
    </div>
  )
}


export default Home;