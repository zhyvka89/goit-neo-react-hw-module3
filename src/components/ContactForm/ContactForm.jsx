import { useId } from "react";
import { form_wrapper, form, input, button } from "./ContactForm.module.css";

function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  return (
    <div className={form_wrapper}>
      <form className={form}>
        <label htmlFor={nameId}>Name</label>
        <input 
          className={input}
          type="text"
          name="contactName"
          id={nameId}
        />

        <label htmlFor={numberId}>Number</label>
        <input
          className={input}
          type="text"
          name="contactNumber"
          id={numberId}
        />

        <button className={button} type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactForm;
