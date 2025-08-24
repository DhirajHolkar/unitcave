// app/contact/page.js
'use client';
import React from 'react';
import '../../styles/contact-page.css'
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">Contact Us</div>
      <p className="contact-text">
        Have questions, feedback, or just want to say hello? We would love to hear from you!
        Whether it is about unit conversion topics, collaborations, or suggestions for improvement,
        feel free to reach out.
      </p>
      <p className="contact-text">
        You can contact us directly by sending an email to:
      </p>
      <p className="contact-text">
        {/* <a href="mailto:informationcave100@gmail.com">informationcave100@gmail.com</a> */}
        informationcave100@gmail.com
      </p>
      <p className="contact-text">
        We usually respond within 24 to 48 hours. Thank you for supporting!
        Stay Curious and keep exploring!
      </p>
    </div>
  );
}

export default ContactPage;