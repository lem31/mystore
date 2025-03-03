
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
 

  <div  className={styles.background_image}>
  
  <Outlet/>
  
  <Footer/>
  </div>
  </div>
 
);
}

export default Layout;