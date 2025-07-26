import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_Arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'bc218f7c-d71c-4005-aa9d-863d8e34ccfd');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Message Sent Successfully! We\'ll get back to you soon ✅');
      event.target.reset();
    } else {
      console.log('Error:', data);
      setResult('Failed to send message. Please try again. ❌');
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Get in Touch</h3>
        <img src={msg_icon} alt="message icon" />
        <p>
          Have questions about our school? We'd love to hear from you! Reach out to us
          through the contact form or use the information below.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="email" />
            Email: info@brightfutureschool.com
          </li>
          <li>
            <img src={phone_icon} alt="phone" />
            Phone: +1 (555) 123-4567
          </li>
          <li>
            <img src={location_icon} alt="location" />
            Address: 123 Learning Lane, Education City, EC 12345
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit} className="contact-form">
          <label>Parent/Guardian Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label>Student's Grade Level (if applicable)</label>
          <select name="grade" required>
            <option value="">Select Grade Level</option>
            <option value="K-5">Kindergarten - Grade 5</option>
            <option value="6-8">Grade 6 - Grade 8</option>
            <option value="9-12">Grade 9 - Grade 12</option>
            <option value="general">General Inquiry</option>
          </select>

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Tell us about your inquiry or questions..."
            required
          ></textarea>

          {/* Optional Honeypot Field for Spam Protection */}
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />

          <button type="submit" className="btn dark-btn">
            Send Message
            <img src={white_Arrow} alt="arrow icon" />
          </button>
        </form>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
