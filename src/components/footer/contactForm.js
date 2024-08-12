import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xblrypvr");
  if (state.succeeded) {
    return <p>Thanks for your message</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-flow-row gap-4 font-Lora">
        <label className="input input-bordered flex items-center font-Inter ">
          <input type="text" className="grow" placeholder="Name" name="name" />
        </label>
        <label className="input input-bordered flex items-center font-Inter">
          <input
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <textarea
          className="textarea textarea-bordered font-Inter"
          placeholder="your message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="btn btn-outline" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
