import React from "react";
import { useState } from "react";
import menu from "../../Images/hamburger-menu-48.png";
import HamburgerNav from '../Hamburger_Menu_Nav';
import styles from '../../CSS_Modules/Header/header.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };



  return (
    <div>
      <button onClick={toggleMenu} className={`${styles.menu_button} ${isOpen ? styles.show_hamburger : ""}`}>
        <img src={menu} alt="menu" />
      </button>
      <div>
      {isOpen && <HamburgerNav />}
      </div>
    </div>
  );
};

export default HamburgerMenu;
