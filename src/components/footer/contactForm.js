import React from "react";

function ContactForm() {
  return (
    <div className="grid grid-flow-row gap-4">
        Name
      <label className="input input-bordered flex items-center ">
        <input type="text" className="grow" placeholder="" />
      </label>
        Email 
      <label className="input input-bordered flex items-center ">
        <input type="text" className="grow" placeholder="example@example.com" />
      </label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="connect with me "
      ></textarea>
      <button className="btn btn-outline">Submit</button>
    </div>
  );
}

export default ContactForm;
