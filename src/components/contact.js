import React from 'react';

function Contact() {

  return (
    <section id="contact" className="contact">
      <svg
        className="contact-svg"
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#FAFAFA" stroke="none"></path>
      </svg>

      <h2 className="contact-title" data-aos="fade-right">
        CONTACT
      </h2>
      <div
        className="title-bar contact-bar"
        data-aos="fade-right"
        data-aos-anchor=".contact-title"
        data-aos-delay="200"
      ></div>

      <div className="contact-text">
        <p data-aos="fade" data-aos-duration="1000">
          Have a question or want to work together?
        </p>
        <p
          data-aos="fade-up"
          data-aos-anchor=".contact-text"
          data-aos-duration="500"
          data-aos-delay="1000"
        >
          please, use the form below or send an email to{" "}
          <strong className="contact-mail">
            hey<i className="mail-icon-at"></i>fullwebstack
            <i className="mail-icon-dot"></i>com
          </strong>
        </p>
      </div>

      <form className="contact-form">
        <div className="name-container">
          <label
            className="label-name"
            htmlFor="name"
            data-aos="fade-right"
            data-aos-anchor=".contact-text"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            Name
          </label>
          <input
            className="input-field"
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            data-aos="fade-up"
            data-aos-anchor=".contact-text"
            data-aos-delay="1000"
            data-aos-duration="1000"
            aria-required={true}
            required
          />
        </div>

        <div className="email-container">
          <label
            className="label-email"
            htmlFor="email"
            data-aos="fade-right"
            data-aos-anchor=".contact-text"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            Email
          </label>
          <input
            className="input-field"
            id="email"
            name="email"
            type="email"
            placeholder="Enter email here"
            data-aos="fade-up"
            data-aos-anchor=".contact-text"
            data-aos-delay="1000"
            data-aos-duration="1000"
            aria-required={true}
            required
          />
        </div>

        <div className="message-container">
          <label
            className="label-message"
            htmlFor="message"
            data-aos="fade-right"
            data-aos-anchor=".contact-text"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            Your message
          </label>
          <textarea
            id="message"
            className="input-textarea"
            name="message"
            placeholder="Enter message here"
            data-aos="fade-up"
            data-aos-anchor=".contact-text"
            data-aos-delay="1000"
            data-aos-duration="1000"
            aria-required={true}
            required
          />
        </div>

        <input
          className="input-submit"
          type="submit"
          value="Send"
          data-aos="fade-left"
          data-aos-anchor=".contact-text"
          data-aos-delay="2000"
          data-aos-duration="1000"
        />
      </form>
    </section>
  );
}

export default Contact;