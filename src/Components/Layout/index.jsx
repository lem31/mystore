
import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
// import Search from "../Search/Search_Component/index";


function Layout(){
return(
  <div >
   
  <Header/>
 

 
  
  <Outlet/>
  
  <Footer/>
 
  </div>
 
);
}

export default Layout;