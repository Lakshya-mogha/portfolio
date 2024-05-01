import React from "react";
import ContactForm from "./contactForm";
function Footer() {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content font-Lora">
      <nav>
        <ContactForm />
      </nav>
      <nav>
        <h6 className="footer-title font-Inter">Contact me @</h6>
        <div className="flex ">
          <img
            src="https://www.svgrepo.com/show/474224/email.svg"
            alt="email"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current mx-1"
          />
          <p>lakshyamogha1@gmail.com</p>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title font-Inter">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Lakshya-mogha" target="_blank">
            <img
              src="https://www.svgrepo.com/show/449764/github.svg"
              alt="github"
              width="24" 
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://www.svgrepo.com/show/450202/linkedin.svg"
              alt="linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="/" target="_blank">
            <img
              src="https://www.svgrepo.com/show/449952/twitter.svg"
              alt="twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="process.env.instagram" target="_blank">
            <img
              src="https://www.svgrepo.com/show/449791/instagram.svg"
              alt="instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
