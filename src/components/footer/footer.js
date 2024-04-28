import React from "react";
import ContactForm from "./contactForm";
function Footer() {
  return (
    <footer className="footer p-10 bg-base-100 text-base-content">
      <nav>
        <ContactForm />
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href={process.env.github} >
            <img
              src="https://www.svgrepo.com/show/449764/github.svg"
              alt="github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="process.env.linkedin">
            <img
              src="https://www.svgrepo.com/show/450202/linkedin.svg"
              alt="linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="process.env.twitter">
            <img
              src="https://www.svgrepo.com/show/449952/twitter.svg"
              alt="twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            />
          </a>
          <a href="process.env.instagram">
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
