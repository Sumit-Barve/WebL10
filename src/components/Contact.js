import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${formData.name}! Your details have been submitted successfully.`);
    setFormData({ name: '', email: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-title">
        <h2>Contact Us</h2>
        <p>Fill in your details and we will get back to you soon.</p>
      </div>

      <div className="contact-box">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
    </section>
  );
}

export default Contact;