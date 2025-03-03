
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
// import Search from "../Search/Search_Component/index";
import styles from '../../CSS_Modules/Background/background_image.module.css';

function Layout(){
return(
  <div className={styles.layout_container}>
   
  <Header/>
 
  {/* <Search/> */}
  <div  className={styles.background_image}>
  </div>
  <Outlet/>
  
  <Footer/>
  </div>
 
);
}

export default Layout;