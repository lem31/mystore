
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search/Search_Component";
import styles from '../../CSS_Modules/Background/background_image.module.css';

function Layout(){
return(
  <div>
    <div  className={styles.background_image}>

  <Header/>
  <Search/>
  <Outlet/>
  </div>
  <Footer/>
  </div>
)

}

export default Layout;