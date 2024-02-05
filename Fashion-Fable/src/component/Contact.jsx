// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Contact Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Contact Information</h4>
          <p>
            Feel free to reach out to us using the contact form, or through the following contact details:
          </p>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
