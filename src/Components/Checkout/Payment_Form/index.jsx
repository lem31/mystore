import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback} from 'react';
import useMyStore from '../../../Components/Store';
import CreditCard from '../../../Images/icons8-card-50.png';
import MasterCard from '../../../Images/icons8-mastercard-48.png';
import Amex from '../../../Images/icons8-american-express-48.png';
import Visa from '../../../Images/icons8-visa-48.png';
import Mæstro from '../../../Images/icons8-maestro-48.png';
import Klarna from '../../../Images/klarna-pink-square-logo-24364.png';
import Vipps from '../../../Images/Vipps.png';
import styles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';
import gStyles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';
import checkoutStyles from '../../../CSS_Modules/Checkout_Page/checkout.module.css';
function PaymentForm() {
  const navigate = useNavigate();
  const clearCart = useMyStore((state)=> state.clearCart);
  const handleClick = useCallback(() => {
    navigate({pathname: '/CheckoutSuccess'});
   clearCart();
  
  }, [navigate, clearCart]);
  return (
    <div className={checkoutStyles.payment_form_box}>
      <form className={checkoutStyles.payment_form} onSubmit={(e) => { e.preventDefault(); handleClick(); }}>
        <h1 className={gStyles.h2}>Billing Details</h1>
        <div className={styles.row_div}>
          <div className={checkoutStyles.label_input_div} >
        <label className={checkoutStyles.checkout_label} htmlFor="name">Name</label>
        <input className={checkoutStyles.checkout_first_name} type="text" id="first-name" name="first-name" placeholder="First Name"/>
        </div>
        <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label} htmlFor="last-name">Last Name</label>
        <input className={checkoutStyles.checkout_last_name} type="text" id="last-name" name="last-name" placeholder="Last Name"/>
        </div>
        </div>
        <label className={checkoutStyles.checkout_label}htmlFor="company">Company</label>
        <input className={checkoutStyles.checkout_input} type="text" id="company" name="company" placeholder="company"/>
        <label className={checkoutStyles.checkout_label} htmlFor="country">Country</label>
        <input className={checkoutStyles.checkout_input} type="text" id="country" name="country" placeholder="country"/>
        <div className={checkoutStyles.row_div}>
          <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label}htmlFor="house-number-and-street-name">House Number And Street Name</label>
        <input className={checkoutStyles.checkout_house_no} type="text" id="house-number-and-street-name" name="house-number-and-street-name" placeholder="House Number And Street Name"/>
        </div>
        <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label} htmlFor="apartment-building-number">Apartment, Building Number, etc.</label>
        <input className={checkoutStyles.checkout_building}type="text" id="apartment-building-number" name="apartment-building-number" placeholder="Apartment, Building Number, etc."/>
        </div>
        </div>
        <div className={checkoutStyles.row_div}>
          <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label} htmlFor="town-city">Town/City</label>
        <input className={checkoutStyles.input_town_zip_state} type="text" id="town-city" name="town-city" placeholder="Town/City"/>
        </div>
        <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label} htmlFor="state">State</label>
        <input className={checkoutStyles.input_town_zip_state} type="text" id="state" name="state" placeholder="State"/>
        </div>
        <div className={checkoutStyles.label_input_div}>
        <label className={checkoutStyles.checkout_label} htmlFor="zip-code">Zip Code</label>
        <input className={checkoutStyles.input_town_zip_state}type="text" id="zip-code" name="zip-code" placeholder="Zip Code"/>
        </div>
        </div>
        <label className={checkoutStyles.checkout_label} htmlFor="phone">Phone</label>
        <input className={checkoutStyles.checkout_input} type="number" id="phone" name="phone" placeholder="Phone"/>
        <h2 className={gStyles.h2}>Additional Information</h2>
        <label className={checkoutStyles.checkout_label} htmlFor="additional-info">Additional Information</label>
        <input className={checkoutStyles.checkout_input} type="text" id="additional-info" name="additional-info" placeholder="Additional details about your order. E.G. specific info about delivery"/>
       
       
        <h2 className={gStyles.h2}>Payment</h2>
        <ul className={checkoutStyles.payment_options_ul}>
   
          <li className={checkoutStyles.payment_option_li}>
          <div className={checkoutStyles.card_img_row_div}>
          
          <label htmlFor="option1"> 
          <div className={checkoutStyles.option_one_row_div}>
         
            <input type="radio" id="option1" name="payment-options" value="option1"/> 
          
         
           
              <img className={checkoutStyles.card_img} src={CreditCard} alt="Option 1"/>

              <p className={checkoutStyles.card_payment_p}>Card Payments</p>
             
            <div className={checkoutStyles.card_payment_img_div}>
              <img className={checkoutStyles.card_img} src={MasterCard} alt="Option1"/>
              <img className={checkoutStyles.card_img} src={Amex} alt="Option1"/>
              <img className={checkoutStyles.card_img} src={Visa} alt="Option1"/>
              <img className={checkoutStyles.card_img} src={Mæstro} alt="Option1"/>
              </div>
            
              </div>
           
           
            </label>
            </div>
          </li>
        
          
<div className={styles.card_payment_form_div}>
          <label className={checkoutStyles.checkout_label} htmlFor="card-number">Card Number</label>
          <input className={checkoutStyles.checkout_card_no} type="number" id="card-number" name="card-number" placeholder="Card Number"/>
          <div className={checkoutStyles.row_div}>
          <div className={checkoutStyles.label_input_div}>
          <label className={checkoutStyles.checkout_label} htmlFor="expiry-date">Expiry Date</label>
          <input className={checkoutStyles.checkout_expiry} type="text" id="expiry-date" name="expiry-date" placeholder="Expiry Date"/>
        </div>
        <div className={checkoutStyles.label_input_div}>
          <label className={checkoutStyles.checkout_label} htmlFor="cvc-cvv">Cvc/Cvv</label>
          <input className={checkoutStyles.checkout_cvc} type="number" id="cvc-cvv" name="cvc-cvv" placeholder="CVC/CVV"/>
        </div>
          </div>
          <label className={checkoutStyles.checkout_label} htmlFor="name-on-card">Name On Card</label>
          <input className={checkoutStyles.checkout_name_on_card} type="text" id="name-on-card" name="name-on-card" placeholder="Name On Card"/>
<div className={checkoutStyles.button_div}>
          <button className={gStyles.button} type="submit">PAY</button>
          </div>
          </div>
          <li className={checkoutStyles.payment_option_li}>
          <div className={`${checkoutStyles.payment_option_row} ${checkoutStyles.klarna_div}`}>
            <input type="radio" id="option2" name="payment-options" value="option2"/>
            <label htmlFor="option2"> 
            <div className={checkoutStyles.img_p_div}>
              <img className={checkoutStyles.klarna_img} src={Klarna} alt="Option 2"/>
              <p className={checkoutStyles.klarna_p}>Klarna</p>
              </div>
            </label>
            </div>
          </li>

          <li className={checkoutStyles.payment_option_li}>
            <div className={`${checkoutStyles.payment_option_row} ${checkoutStyles.vipps_div}`}>
            <input type="radio" id="option3" name="payment-options" value="option3"/>
            <label htmlFor="option3"> 
            <div className={checkoutStyles.img_p_div}>
              <img className={checkoutStyles.vipps_img} src={Vipps} alt="Option 3"/>
              <p className= {checkoutStyles.vipps_p}>Vipps</p>
              </div>
            </label>
            </div>
          </li>
        </ul>

      </form>
    </div>
  );};

export default PaymentForm;