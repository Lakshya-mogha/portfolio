import React from "react";

function ContactForm() {
  return (
    <div className="grid grid-flow-row gap-4 font-Lora">
      <label className="input input-bordered flex items-center font-Inter ">
        <input type="text" className="grow" placeholder="Name" />
      </label>
      <label className="input input-bordered flex items-center font-Inter">
        <input type="text" className="grow" placeholder="Email" />
      </label>
      <textarea
        className="textarea textarea-bordered font-Inter"
        placeholder="your message"
      ></textarea>
      <button className="btn btn-outline">Submit</button>
    </div>
  );
}

export default ContactForm;
