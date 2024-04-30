import React from "react";

function ContactForm() {
  return (
    <div className="grid grid-flow-row gap-4 font-Lora">
        Name
      <label className="input input-bordered flex items-center font-Inter ">
        <input type="text" className="grow" placeholder="" />
      </label>
        Email 
      <label className="input input-bordered flex items-center font-Inter">
        <input type="text" className="grow" placeholder="example@example.com" />
      </label>
      <textarea
        className="textarea textarea-bordered font-Inter"
        placeholder="connect with me "
      ></textarea>
      <button className="btn btn-outline">Submit</button>
    </div>
  );
}

export default ContactForm;
