import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
        setFormData({ name: '', email: '', message: '' }); // Clear form after success
      }, (error) => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
