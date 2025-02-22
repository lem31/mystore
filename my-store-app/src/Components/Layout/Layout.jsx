
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Search from "../Search/search"



function Layout(){
return(
  <>
  <Header/>
  <Search/>
  <Outlet/>
  <Footer/>
  </>
)

}

export default Layout;