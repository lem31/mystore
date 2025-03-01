
import React from 'react';
import styles from '../../CSS_Modules/Header/header.module.css';
import {Link} from 'react-router-dom';

function HamburgerNav(){

  return(
    <div className={styles.hamburger_nav_div}>
    <nav className={styles.hamburger_nav} >

     
   
     <ul className={styles.nav_ul}>
       <li className = {styles.li}>
        <div className={styles.link_div}>
       <Link className={styles.link} to="/">Home</Link>
       </div>
       </li>
     
       
         <li>
          <div className={styles.link_div}>
           <Link className={styles.link} to="/Sale">Sale</Link>
           </div>
     
         </li>
         <li>
          <div className={styles.link_div}>
           <Link className={styles.link} to="/About">About</Link>
           </div>
         </li>
         <li>
          <div className={styles.link_div}>
           <Link className={styles.link} to="/Contact">Contact</Link>
            </div>
         </li>
 
       
 
       </ul>
    </nav>
    </div>
  )
};

export default HamburgerNav;