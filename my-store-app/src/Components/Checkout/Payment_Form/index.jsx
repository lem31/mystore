import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback} from 'react';
import CreditCard from '../../../Images/icons8-credit-card-80.png';
import MasterCard from '../../../Images/icons8-mastercard-48.png';
import Amex from '../../../Images/icons8-american-express-48.png';
import Visa from '../../../Images/icons8-visa-48.png';
import Mæstro from '../../../Images/icons8-maestro-48.png';
import Klarna from '../../../Images/klarna-pink-square-logo-24364.png';
import Vipps from '../../../Images/Vipps.png';


function PaymentForm() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate({pathname: '/CheckoutSuccess'});
  }, [navigate]);
  return (
    <div>
<form>
<h1>Billing Details</h1>
<label htmlFor="name">Name</label>
<input type="text" id="first-name" name="first-name" placeholder="First Name"/>
<label htmlFor="last-name">Last Name</label>
<input type="text" id="last-name" name="last-name" placeholder="Last Name"/>
<label htmlFor="company">Company</label>
<input type="text" id="company" name="company" placeholder="company"/>
<label htmlFor="country">Country</label>
<input type="text" id="country" name="country" placeholder="country"/>
<label htmlFor="house-number-and-street-name">House Number And Street Name</label>
<input type="text" id="house-number-and-street-name" name="house-number-and-street-name" placeholder="House Number And Street Name"/>
<label htmlFor="apartment-building-number">Apartment, Building Number, etc.</label>
<input type="text" id="apartment-building-number" name="apartment-building-number" placeholder="Apartment, Building Number, etc."/>
<label htmlFor="town-city">Town/City</label>
<input type="text" id="town-city" name="town-city" placeholder="Town/City"/>
<label htmlFor="state">State</label>
<input type="text" id="state" name="state" placeholder="State"/>
<label htmlFor="zip-code">Zip Code</label>
<input type="text" id="zip-code" name="zip-code" placeholder="Zip Code"/>
<label htmlFor="phone">Phone</label>
<input type="number" id="phone" name="phone" placeholder="Phone"/>
<h2>Additional Information</h2>
<label htmlFor="additional-info">Additional Information</label>
<input type="text" id="additional-info" name="additional-info" placeholder="Additional details about your order. E.G. specific info about delivery"/>
<h2>Payment</h2>
<ul>
  <li>
    <input type="radio" id="option1" name="payment-options" value="option1"/>
    <label htmlFor="option1">
      <img src={CreditCard} alt="Option 1"/>
      <span>Card Payment</span>
      <img src={MasterCard} alt="Option1"/>
      <img src={Amex} alt="Option1"/>
      <img src={Visa} alt="Option1"/>
      <img src={Mæstro} alt="Option1"/>
    </label>
  </li>

  <label htmlFor="card-number"/>
  <input type="number" id="card-number" name="card-number" placeholder="Card Number"/>
  <label htmlFor="expiry-date"/>
  <input type="text" id="expiry-date" name="expiry-date" placeholder="Expiry Date"/>
  <label htmlFor="cvc-cvv"/>
  <input type="number" id="cvc-cvv" name="cvc-cvv" placeholder="CVC/CVV"/>
  <label htmlFor="name-on-card"/>
  <input type="text" id="name-on-card" name="name-on-card" placeholder="Name On Card"/>

  <button onClick={handleClick}>PAY</button>

  <li>
  <input type="radio" id="option2" name="payment-options" value="option2"/>
  <label htmlFor="option2"> 
  <img src={Klarna} alt="Option 2"/>
  <span>Klarna</span>
  </label>
  </li>

  <li>
  <input type="radio" id="option3" name="payment-options" value="option3"/>
  <label htmlFor="option3"> 
  <img src={Vipps} alt="Option 3"/>
  <span>Vipps</span>
  </label>
  </li>

</ul>





</form>

</div> )};

export default PaymentForm;