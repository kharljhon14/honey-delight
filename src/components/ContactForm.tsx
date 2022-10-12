import { useRef } from "react";
import { scrollAnimation } from "../helpers";

const ContactForm = () => {
   const formElement = useRef<HTMLFormElement>(null);

   window.addEventListener("scroll", () => {
      if (formElement.current !== null) scrollAnimation([formElement.current], "fadeIn");
   });

   return (
      <form ref={formElement} className="form">
         <h2 className="form__header header-3">Contact Us</h2>
         <div className="form__input">
            <input id="name" type="text" required />
            <label htmlFor="name">Name</label>
         </div>
         <div className="form__input">
            <input id="email" type="email" required />
            <label htmlFor="email">Email</label>
         </div>

         <div className="form__input">
            <input id="message" type="text" required />
            <label htmlFor="message">Message</label>
         </div>
         <button className="form__btn" type="submit">
            Submit
         </button>
      </form>
   );
};

export default ContactForm;
