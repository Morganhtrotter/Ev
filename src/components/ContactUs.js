import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_uoxbo6m', 'template_arpnkvi', e.target, 'user_q6DaYgZSgQhSV6M8rqacG')
      .then((result) => {
          console.log(result.text);
          alert("Email Successfully Sent!");
      }, (error) => {
          console.log(error.text);
          alert("Error Sending Email: " + error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="to_name" />
      <br />
      <label>Email</label>
      <input type="email" name="user_email" />
      <br />
      <label>Message</label>
      <textarea name="message" />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
}