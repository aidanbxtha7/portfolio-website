import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_xwn87xa', 'template_72dr7ni', formData, 'oGozuMThqCjW2ifEd')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">Send</button>
        </form>
        {status && <p className="contact-status">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
