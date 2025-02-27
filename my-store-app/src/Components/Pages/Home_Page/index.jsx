import React from 'react';
import FetchProducts from '../../../API/api';
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';
import gStyles from '../../..//CSS_Modules/Global_Styles/global_styles.module.css';

function Home(){
  return (
    <div>
      <div className={styles.h1_div_home}>
<h1 className={gStyles.h1}>Check Out Our Latest Products Below!<br/><span>OR GO</span> STRAIGHT TO OUR SALE</h1>
<button>SALE</button>
</div>



<h3>PURCHASE SOME OF OUR HOTTEST ITEMS BEFORE THEY SELL OUT!</h3>




<div className={styles.external_container} >

<FetchProducts/>
</div>
    </div>
  )
}


export default Home;