import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Bright Future School</h4>
          <p>Nurturing young minds for tomorrow's success</p>
          <p>Building confident, caring, and capable individuals</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Admissions</li>
            <li>School Calendar</li>
            <li>Parent Portal</li>
            <li>Student Life</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 info@brightfutureschool.com</p>
          <p>📞 (555) 123-4567</p>
          <p>📍 123 Learning Lane, Education City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Bright Future School. All rights reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer