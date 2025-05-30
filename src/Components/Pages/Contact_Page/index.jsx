/**
 * Contact page component displaying contact information and a contact form.
 *
 * @component
 * @returns {JSX.Element} The rendered Contact page.
 */

import ContactForm from "../../Contact_Form";
import styles from "../../../CSS_Modules/Home_Page_Body/home_page_body.module.css";
import gStyles from "../../../CSS_Modules/Global_Styles/global_styles.module.css";
import contactStyles from "../../../CSS_Modules/Contact/contact.module.css";
import locationImg from "../../../Images/icons8-location-50.png";
import phoneImg from "../../../Images/icons8-phone-50.png";
import emailImg from "../../../Images/icons8-email-50.png";

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={`${gStyles.h1} ${contactStyles.contact_title}`}>
        CONTACT US
      </h1>
      <div className={contactStyles.layout_div}>
        <div className={contactStyles.get_in_touch_div}>
          <h2 className={`${gStyles.h2} ${contactStyles.h2_contact}`}>
            GET IN TOUCH
          </h2>
          <p className={contactStyles.contact_p}>
            Just contact our 24h customer support team with any questions you
            may have by email, phone or by sending us a message via our contact
            form, just press "Send".
          </p>
          <img
            className={contactStyles.contact_image}
            src={locationImg}
            alt="location"
          />
          <p className={contactStyles.contact_p}>
            ADDRESS <br /> 44 Chester Road, London, UK.
          </p>
          <img
            className={contactStyles.contact_image}
            src={phoneImg}
            alt="phone"
          />
          <p className={contactStyles.contact_p}>
            PHONE <br /> 45367897
          </p>
          <img
            className={contactStyles.contact_image}
            src={emailImg}
            alt="email"
          />
          <p className={contactStyles.contact_p}>
            EMAIL <br />
            Eg@Example.com
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
