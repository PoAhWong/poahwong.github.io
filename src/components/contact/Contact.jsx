import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rc0mp82",
      "template_qubswfh",
      form.current,
      "gJ3JqNXwEkrNwqAIk"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <p className="contact_info">
              wongpoah
              <br />
              @gmail.com
            </p>
            <a href="mailto:opawong@yahoo.com" target="_blank">
              Send a Email
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option_icon" />
            <h4>LinkedIn</h4>
            <p className="contact_info">Come and Say Hi</p>
            <a href="https://www.linkedin.com/in/po-ah-wong/" target="_blank">
              Say Hi
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn_primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
