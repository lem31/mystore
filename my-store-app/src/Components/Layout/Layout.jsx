
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Search from "../Search/search"
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