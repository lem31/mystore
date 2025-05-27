/**
 * ContactForm component renders a contact form with validation using React Hook Form and Yup.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered contact form component.
 *
 * @example
 * <ContactForm />
 */

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import contactStyles from "../../CSS_Modules/Contact/contact.module.css";
import gStyles from "../../CSS_Modules/Global_Styles/global_styles.module.css";

const validation = yup.object({
  fullName: yup.string().min(3).max(100).required(),

  email: yup.string().email().required(),

  subject: yup.string().min(3).max(100).required(),

  message: yup.string().min(3).max(1000).required(),
});

function ContactForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <form className={contactStyles.contact_form}>
      <div className={contactStyles.label_input_div}>
        <label
          className={contactStyles.contact_label}
          htmlFor="fullName"
        >
          {" "}
          FULL NAME
        </label>
        <input
          className={contactStyles.contact_input}
          {...register("fullName")}
        />

        <p className={contactStyles.error_message}>
          {errors.fullName?.message}
        </p>
      </div>
      <div className={contactStyles.label_input_div}>
        <label
          className={contactStyles.contact_label}
          htmlFor="email"
        >
          {" "}
          EMAIL
        </label>
        <input
          className={contactStyles.contact_input}
          {...register("email")}
        />
        <p className={contactStyles.error_message}>{errors.email?.message}</p>
      </div>
      <div className={contactStyles.label_input_div}>
        <label
          className={contactStyles.contact_label}
          htmlFor="subject"
        >
          {" "}
          SUBJECT
        </label>
        <input
          className={contactStyles.contact_input}
          {...register("subject")}
        />
        <p className={contactStyles.error_message}>{errors.subject?.message}</p>
      </div>
      <div className={contactStyles.label_input_div}>
        <label
          className={contactStyles.contact_label}
          htmlFor="message"
        >
          {" "}
          MESSAGE
        </label>
        <input
          className={contactStyles.contact_input}
          {...register("message")}
        />
        <p className={contactStyles.error_message}>{errors.message?.message}</p>
      </div>
      <button
        className={gStyles.button}
        type="submit"
      >
        SEND
      </button>
    </form>
  );
}

export default ContactForm;
