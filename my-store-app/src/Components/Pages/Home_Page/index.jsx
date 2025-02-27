import React from 'react';
import FetchProducts from '../../../API/api';
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';


function Home(){
  return (
    <div>
<h1>Check Out Our Latest Products Below!</h1>
<h2>OR GO STRAIGHT TO OUR SALE</h2>
<button>SALE</button>

<h3>PURCHASE SOME OF OUR HOTTEST ITEMS BEFORE THEY SELL OUT!</h3>




<div className={styles.external_container} >

<FetchProducts/>
</div>
    </div>
  )
}


export default Home;