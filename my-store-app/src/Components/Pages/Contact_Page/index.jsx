import React from 'react';
import ContactForm from "../../Contact_Form";
import styles from '../../../CSS_Modules/Home_Page_Body/home_page_body.module.css';

function Contact(){
  
  return(
    <div className={styles.container}>
      <h1>Contact</h1>
      <ContactForm/>
    </div>
  )
}

export default Contact;
  